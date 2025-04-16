
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Pixel art grid background */}
      <div className="absolute inset-0 z-0 pixel-grid-bg opacity-20"></div>
      
      {/* Decorative pixels */}
      <div className="absolute left-0 top-40 w-16 h-16 bg-retro-pink rounded-md transform rotate-12 opacity-20"></div>
      <div className="absolute right-20 bottom-20 w-24 h-24 bg-retro-blue rounded-md transform -rotate-12 opacity-20"></div>
      
      <div className="pixel-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-retro-blue/20 text-retro-blue hover:bg-retro-blue/30">Our Story</Badge>
            <h2 className="text-3xl font-bold mb-6">Bringing Retro Gaming Art to Life</h2>
            <p className="text-muted-foreground mb-4">
              At PixelHaven, we're passionate about preserving and celebrating the artistic 
              legacy of retro gaming. Our team of pixel artists and gaming enthusiasts 
              meticulously craft each digital collectible, capturing the charm and nostalgia 
              of the classic gaming era.
            </p>
            <p className="text-muted-foreground mb-6">
              Every piece in our collection tells a story - from iconic game characters to 
              fantasy creatures and sci-fi spaceships. We blend authentic pixel art aesthetics 
              with modern design sensibilities to create unique collectibles that resonate with 
              both retro gaming fans and digital art collectors.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-accent/40 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-retro-dark-blue mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Unique Collectibles</div>
              </div>
              <div className="bg-accent/40 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-retro-dark-blue mb-1">12k+</div>
                <div className="text-sm text-muted-foreground">Happy Collectors</div>
              </div>
              <div className="bg-accent/40 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-retro-dark-blue mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Curated Collections</div>
              </div>
              <div className="bg-accent/40 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-retro-dark-blue mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
            
            <Button 
              className="pixel-btn bg-retro-purple hover:bg-retro-purple/90 text-white"
              asChild
            >
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            {/* Pixel art illustration */}
            <div className="w-full aspect-square max-w-md mx-auto p-8">
              <div className="w-full h-full relative bg-white rounded-xl shadow-lg overflow-hidden pixel-border border-retro-purple">
                {/* Pixel art computer/workstation */}
                <div className="absolute inset-0 p-8 grid grid-cols-16 grid-rows-16">
                  {/* Computer/console */}
                  <div className="col-start-3 col-end-14 row-start-4 row-end-10 bg-retro-dark-blue"></div>
                  <div className="col-start-4 col-end-13 row-start-5 row-end-9 bg-retro-green"></div>
                  <div className="col-start-6 col-end-11 row-start-10 row-end-12 bg-retro-dark-blue"></div>
                  <div className="col-start-5 col-end-12 row-start-12 row-end-13 bg-retro-dark-blue"></div>
                  
                  {/* Character on screen */}
                  <div className="col-start-7 col-end-10 row-start-6 row-end-7 bg-retro-yellow"></div>
                  <div className="col-start-6 col-end-11 row-start-7 row-end-8 bg-retro-yellow"></div>
                  <div className="col-start-8 col-end-9 row-start-7 row-end-8 bg-retro-red"></div>
                  <div className="col-start-9 col-end-10 row-start-7 row-end-8 bg-retro-red"></div>
                  
                  {/* Controllers */}
                  <div className="col-start-2 col-end-5 row-start-11 row-end-13 bg-retro-red"></div>
                  <div className="col-start-12 col-end-15 row-start-11 row-end-13 bg-retro-blue"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-retro-yellow rounded-md animate-pixel-float"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-retro-orange rounded-md animate-pixel-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
