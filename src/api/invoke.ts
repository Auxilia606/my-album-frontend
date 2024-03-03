import axios from "axios";

export const defaultApi = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "http://3.39.255.39:80",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
