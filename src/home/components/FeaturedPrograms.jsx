import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedPrograms() {
  const partners = [
    {
      name: "NHL 23 WORLD CHAMPIONSHIP",
      logo: "https://a.storyblok.com/f/150896/342x180/cf44c944af/nhl.png",
    },
    {
      name: "MLB THE SHOW 22",
      logo: "https://a.storyblok.com/f/150896/342x180/07b7d3805a/logo-mlb.png",
    },
    {
      name: "ZOTAC CUP",
      logo: "https://a.storyblok.com/f/150896/342x180/cb3d546b42/logo-zotac.png",
    },
    {
      name: "APEX LEGENDS GLOBAL SERIES",
      logo: "https://a.storyblok.com/f/150896/342x180/188c57d647/algs.png",
    },
    {
      name: "VALORANT COLLEGE",
      logo: "https://a.storyblok.com/f/150896/342x180/3c0d6d448e/cval.png",
    },
    {
      name: "Premier League",
      logo: "https://a.storyblok.com/f/150896/342x180/007ffebceb/epl.png",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#172532]">
      <div className="max-w-4xl xl:max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase text-black">
          Looking to unlock the full potential of your esports events?
        </h2>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-black w-fit p-2 border-b-4 border-r-4 border-[#EB2B44] ">
          THAT'S WHERE WE COME IN
        </h2>
        <p className="text-gray-800 mb-8 max-w-3xl">
          We create engaging experiences that gamers want to be a part of, while
          tracking your program's impact and success with those you want to
          connect with
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#233033] hover:opacity-85 font-bold py-2 px-6 rounded-full transition duration-300 mb-16"
        >
          LET'S WORK TOGETHER
        </Link>

        <h3 className="text-3xl font-bold mb-8 text-center text-black">FEATURED PROGRAMS</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black rounded-lg overflow-hidden">
            <img
              src="https://a.storyblok.com/f/150896/1782x1002/7965b76610/algs-image.png"
              alt="Apex Legends Global Series"
              className="w-full h-60 object-cover transition-all duration-300 ease-in-out filter grayscale hover:filter-none hover:cursor-pointer"
            />
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src="https://a.storyblok.com/f/150896/956x568/03906d94ce/featured-clol.png"
              alt="Apex Legends Global Series"
              className="w-full h-60 object-cover transition-all duration-300 ease-in-out filter grayscale hover:filter-none hover:cursor-pointer"
            />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 my-20">
          SOME OTHER MAJOR PLAYERS WE'VE WORKED WITH
        </h2>
        <p className="text-xl text-center mb-12">(Just to name a few)</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 opacity-90 hover:opacity-100 relative">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto object-contain"
              />
              <div className="absolute top-0  h-32 w-40 rounded-full hover:bg-gradient-to-b from-white/25 to-transparent filter blur-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
