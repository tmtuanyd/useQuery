import axios from "axios";
import { BookType } from "./Type/Book";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});
export const getAllBooks = async () => {
  const response = await api.get("/books");
  if (response.status !== 200) {
    throw new Error("Some thing went wrong");
  }
  return response.data;
};

export const removeBook = async (id: number) => {
  const response = await api.delete(`books/${id}`);
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return true;
};

export const getBook = async ({ queryKey }: any) => {
  const [_key, { id }] = queryKey;
  const response = await api.get(`books/${id}`);
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }
  return response.data;
};

export const updateBook = async ({id, ...data}: BookType) => {
    const response = await api.put(`books/${id}`)
    if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      return response.data;
}
