import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => (
  <div className="min-h-screen flex flex-col items-center justify-center pixel-bg relative">
    <div className="absolute inset-0 pointer-events-none">
      {/* Optional: floating pixel SVGs or glitch effect */}
    </div>
    <div className="flex flex-col items-center z-10">
      <div className="text-[7rem] font-pixel text-retro-red animate-pixel-blink drop-shadow-lg select-none">
        404
      </div>
      <div className="mb-8">
        {/* Pixel character lost in a glitchy environment */}
        <div className="w-32 h-32 mx-auto bg-retro-blue rounded-lg pixel-border flex items-end justify-center relative overflow-hidden">
          <div className="w-8 h-8 bg-retro-yellow rounded shadow-lg absolute bottom-2 left-1/2 -translate-x-1/2 animate-pixel-bounce"></div>
          {/* Add more pixel elements for scene */}
        </div>
      </div>
      <div className="font-pixel text-lg mb-4 text-retro-blue text-center">
        Oops! This page is lost in the pixel void.
      </div>
      <Link
        to="/"
        className="pixel-btn bg-retro-green text-white rounded-full px-8 py-3 font-pixel text-lg shadow-lg transition-all hover:bg-retro-green/90 active:scale-95 animate-pixel-press"
      >
        Back to Home
      </Link>
      {/* Optional: music/sound toggle */}
    </div>
  </div>
);

export default NotFound404;
