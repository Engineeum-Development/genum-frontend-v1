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
 * Session structure stored in localStorage
 */
export interface UserSession {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  }
}