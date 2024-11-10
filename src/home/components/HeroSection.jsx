import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 ">
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-grid-dark w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 ">Sports Connect</h1>
        <div className="relative w-80 h-1">
          <span className="absolute w-20 h-1 bg-[#FF6694]  animate-slide"></span>
        </div>
        <p className="sm:text-xl md:text-2xl text-gray-400 mt-4 mb-8">
          Community through competition
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="bg-[#a87bcd] hover:bg-[#FF6694] text-white font-bold text-sm sm:text-base py-3 px-6 rounded transition duration-700 "
          >
            Organize an event
          </Link>
          <Link
            to="/find"
            className="bg-[#3366CD] hover:bg-[#FF6694] text-white font-bold py-3 px-6 rounded transition duration-700 text-center"
          >
            Find events
          </Link>
        </div>
      </div>
    </div>
  );
}
