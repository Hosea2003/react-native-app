import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function getPosts() {
  const response = await apiClient.get<Post[]>("posts");
  return response.data;
}
