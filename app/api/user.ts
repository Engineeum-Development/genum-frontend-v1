import { API_BASE_URL } from "@/constants/config";
import handleAxiosError from "./handleAxiosError";
import { getApiClient } from "./axiosUser";
import {
  UserCreationRequest,
  UserLoginRequest,
  GenumUserDTO,
  UserSession,
} from "@/types/user";
import toast from "react-hot-toast";

/**
 * Creates a new user
 * @param userData - User creation data
 * @returns Promise with the created user data
 */
export const createUser = async (
  userData: UserCreationRequest
): Promise<GenumUserDTO> => {
  try {
    const axios = getApiClient();
    const response = await axios.post(
      `${API_BASE_URL}/api/user/create`,
      userData
    );
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
export const loginUser = async (
  credentials: UserLoginRequest
): Promise<string> => {
  try {
    const axios = getApiClient();
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/login`,
      credentials
    );

    // Extract token from Authorization header
    const authHeader = response.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7);

      // Create and store session
      const session: UserSession = {
        token,
        user: {
          id: response.data.data?.id || "",
          email: credentials.email,
          firstName: response.data.data?.firstName || "",
          lastName: response.data.data?.lastName || "",
        },
      };

      localStorage.setItem("session", JSON.stringify(session));
      return response.data;
    } else {
      throw new Error("No authorization token received");
    }
  } catch (error) {
    console.log(error);
    const errorMessage = handleAxiosError(error, "Error during login");
    toast.error(errorMessage.message);
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
    const response = await axios.get(`${API_BASE_URL}/api/user/profile`);
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

/**
 * Verifies a user's email
 * 	@param token - Verification token
 * @returns Promise with the verification success message
 * @throws Error if verification fails
 * */

export const verifyEmail = async (token: string): Promise<string> => {
  try {
    const axios = getApiClient();
    const response = await axios.get(
      `${API_BASE_URL}/api/user/confirm-token?token=${token}`
    );
    return response.data.message;
  } catch (error) {
    const errorMessage = handleAxiosError(error, "Error verifying email");
    toast.error(errorMessage.message);
    throw new Error(errorMessage.message);
  }
};
