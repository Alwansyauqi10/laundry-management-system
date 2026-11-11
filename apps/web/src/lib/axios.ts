
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
