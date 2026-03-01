import React, { useState, useEffect } from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpeg";
import c5 from "../assets/c5.jpg";
import { QUOTES } from "../const/welcomeMessage";
import About from "./About";
const images = [c1, c2, c3, c4, c5];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Manual controls
  const goToPrev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div>
      <div className="relative w-full h-[28rem] md:h-[35rem] overflow-hidden ">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="absolute w-full h-full object-cover"
            />
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>

            {/* Text content for current slide only */}
            {idx === current && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
                <div className="bg-white/50 rounded-2xl p-2 md:p-6 text-center backdrop-blur-md shadow-lg">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#333333] drop-shadow-md">
                    Welcome to Our{" "}
                    <span className="text-[#FF5500]">School Hub</span>
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#333]">
                    {QUOTES[idx]}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-[#FF5500]" : "bg-white"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5500] ">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5500] ">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="mt-5">
         {/* About Section */}
        <About />
      </div>
    </div>
  );
};

export default HomePage;
