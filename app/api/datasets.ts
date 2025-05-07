import { API_BASE_URL } from "@/constants/config";
import { getApiClient } from "./axiosUser";
import handleAxiosError from "./handleAxiosError";
import toast from "react-hot-toast";

interface UploadDatasetProps {
  file: File;
  metadata: {
    datasetName: string;
    tags: string[];
    description: string;
  };
}

export async function uploadDataset({
  file,
  metadata,
}: UploadDatasetProps): Promise<string> {
  const formData = new FormData();

  formData.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );
  formData.append("file", file);
  // console.log(formData);
  try {
    const axios = getApiClient();
    const response = await axios.post(
      `${API_BASE_URL}/api/dataset/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data.message;
  } catch (error) {
    console.log(error);
    const errorMessage = handleAxiosError(error, "Error uploading dataset");
    toast.error(errorMessage.message);
    throw new Error(errorMessage.message);
  }
}

export async function getDatasets() {
  try {
    const axios = getApiClient();
    const response = await axios.get(`${API_BASE_URL}/api/dataset/all`);
    // console.log(response.data);
    return response.data.content;
  } catch (error) {
    console.log(error);
    const errorMessage = handleAxiosError(error, "Error getting dataset");
    toast.error(errorMessage.message);
    throw new Error(errorMessage.message);
  }
}
export async function getDataset(id: string) {
  try {
    const axios = getApiClient();
    const response = await axios.get(`${API_BASE_URL}/api/dataset/all/${id}`);
    // console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    const errorMessage = handleAxiosError(error, "Error getting dataset");
    toast.error(errorMessage.message);
    throw new Error(errorMessage.message);
  }
}

export async function upvoteDataset(id: string) {
  try {
    const axios = getApiClient();
    const response = await axios.put(
      `${API_BASE_URL}/api/dataset/upvote/${id}`
    );
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    const errorMessage = handleAxiosError(error, "Could not upvote dataset");
    toast.error(errorMessage.message);
    throw new Error(errorMessage.message);
  }
}
