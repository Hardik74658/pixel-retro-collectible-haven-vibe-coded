
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchDialog from "./SearchDialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const location = useLocation();

  // Cycle through background colors for pixel art effect
  useEffect(() => {
    const colors = [
      "bg-transparent",
      "bg-retro-blue/40", 
      "bg-retro-pink/40", 
      "bg-retro-purple"
    ];
    
    let colorIndex = 0;
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setBgColor(colors[colorIndex]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 shadow-sm border-b-4 border-black">
      <div className={`${bgColor} transition-colors duration-300 backdrop-blur-md`}>
        <div className="pixel-container flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-retro-red rounded-lg mr-2 pixel-img border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] animate-pixel-pulse">
              <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      [0, 3, 5, 6, 9, 10, 12, 15].includes(i)
                        ? "bg-white"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground font-['Press_Start_2P'] leading-tight">
              Pixel<span className="text-retro-red">Haven</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Link to="/" className={`pixel-nav-item ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/shop" className={`pixel-nav-item ${isActive('/shop') ? 'active' : ''}`}>Shop</Link>
            <Link to="/collections" className={`pixel-nav-item ${isActive('/collections') ? 'active' : ''}`}>Collections</Link>
            <Link to="/about" className={`pixel-nav-item ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link to="/contact" className={`pixel-nav-item ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              asChild
            >
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-retro-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center border border-black">
                  3
                </span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              asChild
            >
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="border-2 border-transparent hover:border-black"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white animate-pixel-fade-in absolute w-full z-50 border-t-2 border-black">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent ${isActive('/') ? 'bg-primary text-white' : ''}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent ${isActive('/shop') ? 'bg-primary text-white' : ''}`}
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/collections" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent ${isActive('/collections') ? 'bg-primary text-white' : ''}`}
              onClick={toggleMenu}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent ${isActive('/about') ? 'bg-primary text-white' : ''}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-accent ${isActive('/contact') ? 'bg-primary text-white' : ''}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          <div className="px-4 py-3 flex justify-between border-t-2 border-black">
            <Button 
              variant="ghost" 
              size="icon"
              className="border-2 border-transparent hover:border-black"
              onClick={() => {
                setIsSearchOpen(true);
                setIsOpen(false);
              }}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative border-2 border-transparent hover:border-black"
              asChild
              onClick={toggleMenu}
            >
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-retro-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center border border-black">
                  3
                </span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="border-2 border-transparent hover:border-black"
              asChild
              onClick={toggleMenu}
            >
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      )}

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </nav>
  );
};

export default Navbar;
