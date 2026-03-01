import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./pages/Header";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import PublicRoute from "./routes/PublicRoute";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* Header visible on all pages */}
        <Header />
        <Routes>
          {/* Public Routes */}
           <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />

          {/* Protected Routes */}
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
