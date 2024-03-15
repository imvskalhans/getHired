import axios from "axios";

const API_URL = "http://localhost:8080";

export const savePost = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/post`, payload);
    return response.data;
  } catch (error) {
    console.error("Error saving post: ", error.response.data.message);
    throw new Error(`Failed to save post: ${error.response.data.message}`);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching all posts: ", error.message);
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }
};