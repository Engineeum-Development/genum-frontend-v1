import handleAxiosError from "./handleAxiosError";
import { getApiClient } from "./axiosUser";
import { API_BASE_URL } from "@/constants/config";
import {
	CourseDTO,
	PaginatedResponse,
	CourseCreationRequest,
	LessonCreationRequest,
	LessonDTO,
	VideoMetadata,
	VideoDTO,
} from "@/types/learning";

// Base API path for learning endpoints
const LEARN_API_PATH = `${API_BASE_URL}/api/learn`;

/**
 * Get all courses with pagination
 * @param page - Page number (default: 0)
 * @param size - Items per page (default: 10)
 * @param sort - Sort properties (default: [])
 * @returns Promise with paginated course data
 */
export const getAllCourses = async (
	page: number = 0,
	size: number = 10,
	sort: string[] = []
): Promise<PaginatedResponse<CourseDTO>> => {
	try {
		const axios = getApiClient();
		const sortParam = sort.length > 0 ? sort.join(",") : "";
		const response = await axios.get(
			`${LEARN_API_PATH}/course?page=${page}&size=${size}${
				sortParam ? `&sort=${sortParam}` : ""
			}`
		);
		return response.data.data;
	} catch (error) {
		const errorMessage = handleAxiosError(error, "Error fetching courses");
		throw new Error(errorMessage.message);
	}
};

/**
 * Get all courses uploaded by the current user
 * @param page - Page number (default: 0)
 * @param size - Items per page (default: 10)
 * @param sort - Sort properties (default: [])
 * @returns Promise with paginated course data
 */
export const getMyUploadedCourses = async (
	page: number = 0,
	size: number = 10,
	sort: string[] = []
): Promise<PaginatedResponse<CourseDTO>> => {
	try {
		const axios = getApiClient();
		const sortParam = sort.length > 0 ? sort.join(",") : "";
		const response = await axios.get(
			`${LEARN_API_PATH}/course/my-course?page=${page}&size=${size}${
				sortParam ? `&sort=${sortParam}` : ""
			}`
		);
		return response.data.data;
	} catch (error) {
		const errorMessage = handleAxiosError(
			error,
			"Error fetching your courses"
		);
		throw new Error(errorMessage.message);
	}
};

/**
 * Check if the current user is authorized to access a specific course
 * @param courseId - ID of the course to check
 * @returns Promise with boolean indicating authorization status
 */
export const checkCourseAuthorization = async (
	courseId: string
): Promise<boolean> => {
	try {
		const axios = getApiClient();
		const response = await axios.get(
			`${LEARN_API_PATH}/auth/course/${courseId}`
		);
		return response.data.data;
	} catch (error) {
		const errorMessage = handleAxiosError(
			error,
			"Error checking course authorization"
		);
		throw new Error(errorMessage.message);
	}
};

/**
 * Upload a new course
 * @param courseData - Course creation data
 * @returns Promise with the created course data
 */
export const createCourse = async (
	courseData: CourseCreationRequest
): Promise<CourseDTO> => {
	try {
		const axios = getApiClient();
		const response = await axios.post(
			`${LEARN_API_PATH}/course`,
			courseData
		);
		return response.data.data;
	} catch (error) {
		const errorMessage = handleAxiosError(error, "Error creating course");
		throw new Error(errorMessage.message);
	}
};

/**
 * Upload a new lesson
 * @param lessonData - Lesson creation data
 * @returns Promise with the created lesson data
 */
export const createLesson = async (
	lessonData: LessonCreationRequest
): Promise<LessonDTO> => {
	try {
		const axios = getApiClient();
		const response = await axios.post(
			`${LEARN_API_PATH}/lesson`,
			lessonData
		);
		return response.data.data;
	} catch (error) {
		const errorMessage = handleAxiosError(error, "Error creating lesson");
		throw new Error(errorMessage.message);
	}
};

/**
 * Upload a video for a lesson
 * @param metadata - Video metadata
 * @param videoFile - The video file to upload
 * @returns Promise with the created video data
 */
export const uploadVideo = async (
	metadata: VideoMetadata,
	videoFile: File
): Promise<VideoDTO> => {
	try {
		const axios = getApiClient();
		const formData = new FormData();

		formData.append(
			"metadata",
			new Blob([JSON.stringify(metadata)], { type: "application/json" })
		);
		formData.append("video", videoFile);

		const response = await axios.post(
			`${LEARN_API_PATH}/lesson/video`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response.data.data;
	} catch (error) {
		const errorMessage = handleAxiosError(error, "Error uploading video");
		throw new Error(errorMessage.message);
	}
};

/**
 * Check the upload status of a video
 * @param videoId - ID of the video to check
 * @returns Promise with the video status information
 */
export const checkVideoUploadStatus = async (
	videoId: string
): Promise<VideoDTO> => {
	try {
		const axios = getApiClient();
		const response = await axios.get(
			`${LEARN_API_PATH}/lesson/video/${videoId}`
		);
		return response.data.data;
	} catch (error) {
		const errorMessage = handleAxiosError(
			error,
			"Error checking video upload status"
		);
		throw new Error(errorMessage.message);
	}
};

/**
 * Delete a lesson
 * @param lessonId - ID of the lesson to delete
 * @returns Promise with deletion success status
 */
export const deleteLesson = async (lessonId: string): Promise<void> => {
	try {
		const axios = getApiClient();
		await axios.delete(`${LEARN_API_PATH}/lesson/${lessonId}`);
	} catch (error) {
		const errorMessage = handleAxiosError(error, "Error deleting lesson");
		throw new Error(errorMessage.message);
	}
};

/**
 * Delete a video
 * @param videoId - ID of the video to delete
 * @returns Promise with deletion success status
 */
export const deleteVideo = async (videoId: string): Promise<void> => {
	try {
		const axios = getApiClient();
		await axios.delete(`${LEARN_API_PATH}/lesson/video/${videoId}`);
	} catch (error) {
		const errorMessage = handleAxiosError(error, "Error deleting video");
		throw new Error(errorMessage.message);
	}
};
