
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-retro-blue/30 to-retro-pink/30 py-20">
          <div className="pixel-container text-center">
            <Badge className="mb-4 inline-flex bg-white/80 text-foreground">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bringing Pixel Art to Life</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Welcome to PixelHaven, where we celebrate the nostalgic beauty of pixel art
              from the golden era of gaming through uniquely crafted digital collectibles.
            </p>
          </div>
        </section>
        
        {/* Our mission */}
        <section className="py-16">
          <div className="pixel-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At PixelHaven, we're on a mission to preserve and celebrate the artistic 
                  heritage of classic video games through authentic pixel art collectibles.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of passionate pixel artists and gaming enthusiasts meticulously craft 
                  each digital collectible, capturing the charm and nostalgia of retro gaming 
                  while bringing fresh creativity to this beloved art form.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-accent/40 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-retro-dark-blue">2018</div>
                    <div className="text-sm text-muted-foreground">Year Founded</div>
                  </div>
                  <div className="bg-accent/40 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-retro-dark-blue">12</div>
                    <div className="text-sm text-muted-foreground">Pixel Artists</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto">
                  <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden pixel-border border-retro-red">
                    {/* Pixel art representation of our team/mission */}
                    <div className="absolute inset-0 grid grid-cols-16 grid-rows-16 gap-0.5 p-10">
                      {/* Simple pixel art building with flag */}
                      <div className="col-start-3 col-end-14 row-start-8 row-end-14 bg-retro-blue"></div>
                      <div className="col-start-5 col-end-12 row-start-4 row-end-8 bg-retro-red"></div>
                      <div className="col-start-7 col-end-10 row-start-1 row-end-4 bg-retro-yellow"></div>
                      <div className="col-start-5 col-end-7 row-start-9 row-end-11 bg-white"></div>
                      <div className="col-start-10 col-end-12 row-start-9 row-end-11 bg-white"></div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-retro-green rounded-md animate-pixel-bounce"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="pixel-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-retro-blue/10 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-retro-blue"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  We create true pixel art that respects the technical constraints and aesthetic 
                  principles of the retro gaming era.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-retro-red/10 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-retro-red"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Creativity</h3>
                <p className="text-muted-foreground">
                  While honoring retro aesthetics, we push the boundaries with innovative 
                  designs and modern interpretations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-retro-green/10 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-retro-green"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster a passionate community of collectors, artists, and retro gaming 
                  enthusiasts who share our love for pixel art.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join us CTA */}
        <section className="py-20 bg-gradient-to-r from-retro-purple/20 to-retro-blue/20">
          <div className="pixel-container text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Pixel Art Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Become part of our growing community of pixel art enthusiasts and collectors.
              Discover unique collectibles, connect with fellow fans, and celebrate the art of retro gaming.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="pixel-btn bg-retro-red hover:bg-retro-red/90 text-white"
                size="lg"
                asChild
              >
                <Link to="/shop">
                  Browse Collectibles
                </Link>
              </Button>
              
              <Button 
                className="pixel-btn bg-white border-2 border-retro-blue text-foreground"
                size="lg"
                asChild
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
