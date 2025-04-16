
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [pixelState, setPixelState] = useState<boolean[]>(
    Array(64).fill(false)
  );

  // Pixel art animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPixelState((prev) => {
        const newState = [...prev];
        const randomIndex = Math.floor(Math.random() * 64);
        newState[randomIndex] = !newState[randomIndex];
        return newState;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-retro-blue/30 to-white pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Decorative pixel grid background */}
      <div className="absolute inset-0 z-0 pixel-grid-bg opacity-30"></div>

      {/* Animated pixels */}
      <div className="absolute right-0 top-20 w-64 h-64 opacity-20 hidden md:block">
        <div className="grid grid-cols-8 grid-rows-8 gap-1 w-full h-full">
          {pixelState.map((active, i) => (
            <div
              key={i}
              className={`${
                active
                  ? "bg-retro-purple"
                  : i % 3 === 0
                  ? "bg-retro-pink/40"
                  : i % 5 === 0
                  ? "bg-retro-blue/40"
                  : "bg-transparent"
              } transition-colors duration-300`}
            ></div>
          ))}
        </div>
      </div>

      <div className="pixel-container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-retro-dark-blue">Collect</span>{" "}
              <span className="text-retro-red">Pixel Art</span>{" "}
              <span className="relative inline-block animate-pixel-float">
                Treasures
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-retro-yellow"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Discover unique retro-inspired pixel art collectibles that bring nostalgia to life. Limited editions, rare finds, and exclusive collections.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button 
                className="pixel-btn bg-retro-red hover:bg-retro-red/90 text-white text-lg"
                size="lg"
                asChild
              >
                <Link to="/shop">
                  Browse Collection <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="pixel-btn bg-white text-foreground border-retro-blue border-2 text-lg"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Main hero image - Pixel art character/collectible */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white rounded-2xl shadow-xl overflow-hidden pixel-border border-retro-blue animate-pixel-float">
              {/* Pixel art character */}
              <div className="absolute inset-0 grid grid-cols-16 grid-rows-16 bg-white">
                {/* Pixel art creation - simple retro game character */}
                <div className="col-start-7 col-end-11 row-start-4 row-end-7 bg-retro-red"></div>
                <div className="col-start-6 col-end-12 row-start-7 row-end-8 bg-retro-red"></div>
                <div className="col-start-5 col-end-13 row-start-8 row-end-9 bg-retro-red"></div>
                <div className="col-start-5 col-end-13 row-start-9 row-end-11 bg-retro-blue"></div>
                <div className="col-start-4 col-end-6 row-start-9 row-end-11 bg-retro-yellow"></div>
                <div className="col-start-12 col-end-14 row-start-9 row-end-11 bg-retro-yellow"></div>
                <div className="col-start-4 col-end-14 row-start-11 row-end-13 bg-retro-blue"></div>
                <div className="col-start-6 col-end-8 row-start-13 row-end-15 bg-retro-purple"></div>
                <div className="col-start-10 col-end-12 row-start-13 row-end-15 bg-retro-purple"></div>
                
                {/* Eyes */}
                <div className="col-start-7 col-end-8 row-start-5 row-end-6 bg-white"></div>
                <div className="col-start-10 col-end-11 row-start-5 row-end-6 bg-white"></div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -left-6 top-1/4 w-12 h-12 bg-retro-pink rounded-lg shadow-md animate-pixel-bounce delay-100"></div>
            <div className="absolute right-8 bottom-10 w-16 h-16 bg-retro-green rounded-lg shadow-md animate-pixel-pulse delay-200"></div>
            <div className="absolute left-1/2 top-8 w-10 h-10 bg-retro-yellow rounded-lg shadow-md animate-pixel-shift delay-300"></div>
          </div>
        </div>
        
        {/* Bouncing arrow indicating scroll */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-6 border-b-2 border-r-2 border-primary transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
