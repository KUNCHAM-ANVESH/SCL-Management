import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/schoolpoc/user",
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
