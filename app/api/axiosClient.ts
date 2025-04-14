import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, AxiosInstance, AxiosError } from "axios";
import axios from "axios";

const API_BASE_URL = "https://backend-9qqc.onrender.com";
const REQUEST_TIMEOUT = 30000; // 30 seconds

const API_CONFIG = {
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  MAX_RETRIES: 3,
  RETRY_DELAY_BASE: 1000, // 1 second
};

const { DEFAULT_HEADERS, MAX_RETRIES, RETRY_DELAY_BASE } = API_CONFIG;

/**
 * User session interface
 */
export interface Session {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

/**
 * Extended Axios request configuration with metadata and retry tracking
 */
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  metadata?: {
    startTime: number;
  };
  retryCount?: number;
}

/**
 * Singleton API client that handles authentication, retries, and logging
 * @class ApiClient
 */
class ApiClient {
  private static instance: AxiosInstance;

  /**
   * Retrieves the session from localStorage and parses it safely
   * @returns {Session | null} The parsed session or null if invalid/not found
   */
  private static getSession(): Session | null {
    const sessionStr = localStorage.getItem("session");
    if (!sessionStr) return null;

    try {
      return JSON.parse(sessionStr) as Session;
    } catch (e) {
      console.log("Failed to parse session:", e);
      localStorage.removeItem("session"); // Clean up invalid session
      return null;
    }
  }

  /**
   * Gets or creates the singleton axios instance with all interceptors and configuration
   * @returns {AxiosInstance} The configured axios instance
   */
  public static getInstance(): AxiosInstance {
    if (!this.instance) {
      const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: DEFAULT_HEADERS,
        timeout: REQUEST_TIMEOUT,
      });

      this.setupInterceptors(axiosInstance);
      this.instance = axiosInstance;
    }

    return this.instance;
  }

  /**
   * Sets up request and response interceptors for the axios instance
   * @param {AxiosInstance} instance - The axios instance to configure
   */
  private static setupInterceptors(instance: AxiosInstance): void {
    // Request interceptor
    instance.interceptors.request.use(
      async (config) => {
        logRequest(config);

        const customConfig = config as CustomAxiosRequestConfig;
        customConfig.metadata = { startTime: Date.now() };

        const session = this.getSession();
        if (session?.token) {
          customConfig.headers["Authorization"] = `Bearer ${session.token}`;
        }

        return customConfig;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // Response interceptor
    instance.interceptors.response.use(
      (response) => {
        logResponse(response);
        logRequestDuration(response.config as CustomAxiosRequestConfig);
        return response;
      },
      async (error: AxiosError) => {
        handleApiError(error);
        return retryFailedRequest(error);
      }
    );
  }
}

/**
 * Logs request details in development environment
 */
function logRequest(config: AxiosRequestConfig): void {
  if (process.env.NODE_ENV === "development") {
    console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
  }
}

/**
 * Logs response details in development environment
 */
function logResponse(response: AxiosResponse): void {
  if (process.env.NODE_ENV === "development") {
    console.log(`Response: ${response.status} ${response.config.url}`);
  }
}

/**
 * Logs request duration in development environment
 */
function logRequestDuration(config: CustomAxiosRequestConfig): void {
  if (process.env.NODE_ENV === "development" && config.metadata?.startTime) {
    const duration = Date.now() - config.metadata.startTime;
    console.log(`Request duration: ${duration}ms`);
  }
}

/**
 * Handles API errors and performs appropriate actions
 */
function handleApiError(error: AxiosError): void {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.warn("Unauthorized access. Clearing session...");
        localStorage.removeItem("session");
        const currentPath = window.location.pathname;
        localStorage.setItem("redirectAfterLogin", currentPath);

        window.location.href = "/login";
        break;
      case 400:
        console.log("Bad request:", error.response.data);
        break;
      case 404:
        console.log("Resource not found");
        break;
      case 409:
        console.log("Resource conflict:", error.response.data);
        break;
      case 500:
        console.log("Server error");
        break;
      default:
        console.log("API Error:", error.response.data);
    }
  }
}

/**
 * Implements retry mechanism with exponential backoff
 * @param {object} error - The error object from axios
 * @returns {Promise} A promise that either retries the request or rejects
 */
function retryFailedRequest(error: unknown): Promise<unknown> {
  const { config } = error as { config: CustomAxiosRequestConfig };
  if (!config || !config.retryCount) {
    config.retryCount = 0;
  }

  // Don't retry on client errors (4xx)
  const status = (error as AxiosError).response?.status;
  if (status && status >= 400 && status < 500) {
    return Promise.reject(error);
  }

  if (config.retryCount < MAX_RETRIES) {
    config.retryCount++;
    const delay = RETRY_DELAY_BASE * Math.pow(2, config.retryCount - 1);
    return new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
      ApiClient.getInstance()(config)
    );
  }

  return Promise.reject(error);
}

/**
 * Gets the singleton API client instance
 * @returns {AxiosInstance} The configured axios instance
 */
export const getApiClient = () => ApiClient.getInstance();

export default getApiClient();