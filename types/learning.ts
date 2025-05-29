/**
 * Interface for course object structure
 */
export interface CourseDTO {
	courseId: string;
	name: string;
	noOfEnrolled: number;
	rating: number;
}

/**
 * Interface for detailed course information
 */
export interface CourseDetailDTO extends CourseDTO {
	description: string;
	price: number;
}

/**
 * Interface for lesson object structure
 */
export interface LessonDTO {
	lessonId: string;
	title: string;
	description: string;
}

/**
 * Interface for detailed lesson information
 */
export interface LessonDetailDTO extends LessonDTO {
	content: string;
	courseId: string;
}

/**
 * Interface for video object structure
 */
export interface VideoDTO {
	videoId: string;
	lessonId?: string;
	videoSeriesId?: string;
	title: string;
	description: string;
	tags: string[];
	status: string;
	url?: string;
}

/**
 * Interface for paginated response
 */
export interface PaginatedResponse<T> {
	content: T[];
	pageable: {
		sort: {
			empty: boolean;
			sorted: boolean;
			unsorted: boolean;
		};
		offset: number;
		pageNumber: number;
		pageSize: number;
		paged: boolean;
		unpaged: boolean;
	};
	totalPages: number;
	totalElements: number;
	last: boolean;
	size: number;
	number: number;
	sort: {
		empty: boolean;
		sorted: boolean;
		unsorted: boolean;
	};
	numberOfElements: number;
	first: boolean;
	empty: boolean;
}

/**
 * Interface for API response structure
 */
export interface ApiResponse<T> {
	message: string;
	status: string;
	data: T;
}

/**
 * Interface for course creation request
 */
export interface CourseCreationRequest {
	name: string;
	description: string;
	price: number;
}

/**
 * Interface for lesson creation request
 */
export interface LessonCreationRequest {
	courseId: string;
	title: string;
	description: string;
	content: string;
}

/**
 * Interface for video metadata
 */
export interface VideoMetadata {
	lessonId?: string;
	videoSeriesId?: string;
	title: string;
	description: string;
	tags: string[];
}
