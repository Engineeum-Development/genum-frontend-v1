import handleAxiosError from "./handleAxiosError";
import { getApiClient } from "./axiosClient";

/**
 * Interface for user creation request
 */
export interface UserCreationRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country?: string;
  gender?: string;
}

/**
 * Interface for user login request
 */
export interface UserLoginRequest {
  email: string;
  password: string;
}

/**
 * Interface for GenumUserDTO
 */
export interface GenumUserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country?: string;
  gender?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Interface for API response structure
 */
export interface ResponseDetails<T> {
  timestamp: string;
  message: string;
  status: string;
  data?: T;
}

/**
 * Creates a new user
 * @param userData - User creation data
 * @returns Promise with the created user data
 */
export const createUser = async (userData: UserCreationRequest): Promise<GenumUserDTO> => {
  try {
    const axios = getApiClient();
    const response = await axios.post("/api/user/create", userData);
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error, "Error creating user");
    throw new Error(errorMessage.message);
  }
};

/**
 * Authenticates a user and stores the session
 * @param credentials - Login credentials
 * @returns Promise with login success message
 */
export const loginUser = async (credentials: UserLoginRequest): Promise<string> => {
  try {
    const axios = getApiClient();
    const response = await axios.post("/api/auth/login", credentials);
    
    // Extract token from Authorization header
    const authHeader = response.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      
      // Create and store session
      const session = {
        token,
        user: {
          id: response.data.data?.id || '',
          email: credentials.email,
          firstName: response.data.data?.firstName || '',
          lastName: response.data.data?.lastName || ''
        }
      };
      
      localStorage.setItem('session', JSON.stringify(session));
      return response.data;
    } else {
      throw new Error('No authorization token received');
    }
  } catch (error) {
    const errorMessage = handleAxiosError(error, "Error during login");
    throw new Error(errorMessage.message);
  }
};

/**
 * Gets the current user profile
 * @returns Promise with the user profile data
 */
export const getUserProfile = async (): Promise<GenumUserDTO> => {
  try {
    const axios = getApiClient();
    const response = await axios.get("/api/user/profile");
    return response.data.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error, "Error fetching user profile");
    throw new Error(errorMessage.message);
  }
};

/**
 * Logs out the current user by removing the session
 */
export const logoutUser = (): void => {
  localStorage.removeItem("session");
  window.location.href = "/login";
};