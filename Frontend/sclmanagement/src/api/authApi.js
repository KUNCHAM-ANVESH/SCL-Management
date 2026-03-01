import axiosInstance from "../services/axiosInstance";


export const registerUser = async (formData) => {
  return await axiosInstance.post("/auth/register", formData);
};
export const loginUser = async (formData) => {
  return await axiosInstance.post("/auth/login", formData);
};