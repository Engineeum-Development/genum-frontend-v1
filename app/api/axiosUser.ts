import axios from "axios";
import { API_BASE_URL } from "@/constants/config";

const REQUEST_TIMEOUT = 30000;

const API_CONFIG = {
	DEFAULT_HEADERS: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	MAX_RETRIES: 3,
	RETRY_DELAY_BASE: 1000,
};

const { DEFAULT_HEADERS, MAX_RETRIES, RETRY_DELAY_BASE } = API_CONFIG;

interface Session {
	token: string;
	user: {
		id: string;
		email: string;
		firstName: string;
		lastName: string;
	};
}

// Define our own types to avoid namespace issues
interface RequestConfig {
	method?: string;
	url?: string;
	baseURL?: string;
	timeout?: number;
	headers?: Record<string, string>;
	data?: any;
	params?: any;
}

interface CustomRequestConfig extends RequestConfig {
	metadata?: {
		startTime: number;
	};
	retryCount?: number;
}

interface ApiResponse {
	status: number;
	data: any;
	config: RequestConfig;
}

interface ApiError {
	response?: {
		status: number;
		data: any;
	};
	config?: CustomRequestConfig;
	message: string;
}

type AxiosInstanceType = ReturnType<typeof axios.create>;

class ApiClient {
	private static instance: AxiosInstanceType;

	private static getSession(): Session | null {
		if (typeof window === "undefined") return null;

		try {
			const sessionStr = localStorage.getItem("session");
			return sessionStr ? (JSON.parse(sessionStr) as Session) : null;
		} catch (e) {
			console.error("Failed to parse session:", e);
			localStorage.removeItem("session");
			return null;
		}
	}

	public static getInstance(): AxiosInstanceType {
		if (!ApiClient.instance) {
			const axiosInstance = axios.create({
				baseURL: API_BASE_URL,
				headers: DEFAULT_HEADERS,
				timeout: REQUEST_TIMEOUT,
			});

			ApiClient.setupInterceptors(axiosInstance);
			ApiClient.instance = axiosInstance;
		}

		return ApiClient.instance;
	}

	private static setupInterceptors(instance: AxiosInstanceType): void {
		instance.interceptors.request.use(
			(config: any) => {
				const customConfig = config as CustomRequestConfig;
				customConfig.metadata = { startTime: Date.now() };

				const session = ApiClient.getSession();
				if (session?.token) {
					if (!customConfig.headers) {
						customConfig.headers = {};
					}
					customConfig.headers.Authorization = `Bearer ${session.token}`;
				}

				logRequest(customConfig);
				return customConfig;
			},
			(error: ApiError) => Promise.reject(error)
		);

		instance.interceptors.response.use(
			(response: any) => {
				logResponse(response as ApiResponse);
				logRequestDuration(response.config as CustomRequestConfig);
				return response;
			},
			async (error: ApiError) => {
				handleApiError(error);
				return retryFailedRequest(error);
			}
		);
	}
}

function logRequest(config: RequestConfig): void {
	if (process.env.NODE_ENV === "development") {
		console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
	}
}

function logResponse(response: ApiResponse): void {
	if (process.env.NODE_ENV === "development") {
		console.log(`Response: ${response.status} ${response.config.url}`);
	}
}

function logRequestDuration(config: CustomRequestConfig): void {
	if (process.env.NODE_ENV === "development" && config.metadata?.startTime) {
		console.log(`Duration: ${Date.now() - config.metadata.startTime}ms`);
	}
}

function handleApiError(error: ApiError): void {
	if (!error.response) return;

	switch (error.response.status) {
		case 401:
			if (typeof window !== "undefined") {
				localStorage.removeItem("session");
				localStorage.setItem(
					"redirectAfterLogin",
					window.location.pathname
				);
			}
			break;
		// ... other error cases
	}
}

async function retryFailedRequest(error: ApiError): Promise<unknown> {
	const config = error.config as CustomRequestConfig;
	if (!config) return Promise.reject(error);

	const currentRetryCount = config.retryCount || 0;

	if (
		currentRetryCount >= MAX_RETRIES ||
		(error.response?.status ?? 0) < 500
	) {
		return Promise.reject(error);
	}

	config.retryCount = currentRetryCount + 1;

	await new Promise((resolve) =>
		setTimeout(
			resolve,
			RETRY_DELAY_BASE * Math.pow(2, config.retryCount! - 1)
		)
	);

	return ApiClient.getInstance().request(config);
}

export const getApiClient = (): AxiosInstanceType => ApiClient.getInstance();
export default getApiClient;
