import React, { useState } from "react";
import LoginImage from "../assets/LoginImage.jpg";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { loginUser } from "../api/authApi";
import useAuth from "../hooks/useAuth";
import validateLogin from "../utils/validateLogin";

const LoginPage = () => {
  const [succesPopup, setsuccesPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await loginUser(formData);
        if (response.data.status === 200) {
          const token = response.data.token;
          setsuccesPopup(true);
          setTimeout(() => {
            setsuccesPopup(false);
            login(token);
            handleClear();
          }, 2000);
          handleClear();  
        }
      } catch (error) {
        console.error("Login Error:", error);
        setErrorPopup(true);
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 bg-white">
      {/* Left Side - Image */}
      <div className="hidden md:flex items-center justify-center mt-10 rounded-lg p-10">
        <img
          src={LoginImage}
          alt="School"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="flex justify-center font-bold">
            Empower Your Knowledge
          </h1>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex justify-center">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF5500] text-white py-2 rounded-lg hover:bg-[#E64A00] transition"
            >
              Login
            </button>

            {succesPopup && (
              <SuccessMessage
                message="User Login Successfully"
                onClose={() => setsuccesPopup(false)}
              />
            )}
            {errorPopup && (
              <ErrorMessage
                message="Login Failed. Please check your details."
                onClose={() => setErrorPopup(false)}
              />
            )}

            <p className="mt-4 text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/register" className="text-[#FF8C42] hover:underline">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
