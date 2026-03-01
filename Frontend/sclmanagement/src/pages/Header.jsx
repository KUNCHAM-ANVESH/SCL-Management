import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { School } from "lucide-react";
import "./style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); 
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname==="/register") return null;

  return (
    <header className="bg-[#FF5500] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
       <div className="flex ">
         <School className="w-8 h-8 text-white blink " />
        <Link to="/" className="text-2xl font-bold px-3">SchoolHub</Link>
       </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-[18px]">
          <Link to="/" className="link-hover-underline">Home</Link>
          <Link to="/contact" className="link-hover-underline">Contact Us</Link>
          {user?.loggedIn ? (
            <button onClick={logout} className="link-hover-underline">Logout</button>
          ) : (
            <Link to="/login" className="link-hover-underline">Login</Link>
          )}
          <Link to="/about" className="link-hover-underline">About Us</Link>
          <Link to="/services" className="link-hover-underline">Services</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#FF5500] px-4 pb-4 space-y-2  itmes-center">
          <Link to="/home" className="block hover:text-gray-200">Home</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact Us</Link>
          {user?.loggedIn ? (
            <button onClick={logout} className="block hover:text-gray-200 w-full text-left">Logout</button>
          ) : (
            <Link to="/login" className="block hover:text-gray-200">Login</Link>
          )}
          <Link to="/about" className="block hover:text-gray-200">About Us</Link>
          <Link to="/services" className="block hover:text-gray-200">Services</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
