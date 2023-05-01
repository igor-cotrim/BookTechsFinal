import axios from "axios";
import { API_URL_BOOKS, API_URL_REVIWS } from "@env";

const booksApi = axios.create({
  baseURL: `${API_URL_BOOKS}`,
  // baseURL: API_URL_BOOKS,
});
const reviwsApi = axios.create({
  baseURL: `${API_URL_REVIWS}`,
  // baseURL: API_URL_REVIWS,
});

export default { booksApi, reviwsApi };
