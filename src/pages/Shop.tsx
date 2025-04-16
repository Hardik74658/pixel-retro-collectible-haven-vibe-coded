
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  Heart, 
  Search, 
  ShoppingCart, 
  Eye, 
  SlidersHorizontal
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock product data
const products = [
  {
    id: 1,
    name: "Pixel Hero Character",
    description: "Classic 16-bit hero character with sword and shield",
    price: 49.99,
    image: "/hero-character.png", // This would be a placeholder, we'll create a pixel art SVG
    rarity: "Common",
    collection: "Heroes Series",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Retro Space Ship",
    description: "Vintage space shooter inspired craft with animated thrusters",
    price: 69.99,
    image: "/space-ship.png",
    rarity: "Rare",
    collection: "Space Series",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Fantasy Dragon",
    description: "Fearsome fire-breathing dragon from the golden age of RPGs",
    price: 89.99,
    image: "/dragon.png",
    rarity: "Epic",
    collection: "Fantasy Creatures",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Pixel Treasure Chest",
    description: "Animated treasure chest filled with pixel gold and gems",
    price: 39.99,
    image: "/treasure.png",
    rarity: "Common",
    collection: "Dungeon Items",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 5,
    name: "8-Bit Warrior",
    description: "Legendary warrior from the early days of adventure games",
    price: 59.99,
    image: "/warrior.png",
    rarity: "Rare",
    collection: "Heroes Series",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 6,
    name: "Pixel Art Castle",
    description: "Majestic medieval castle with animated flag and drawbridge",
    price: 79.99,
    image: "/castle.png",
    rarity: "Epic",
    collection: "Landmark Series",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 7,
    name: "Retro Racing Car",
    description: "Speedy pixel art race car inspired by arcade classics",
    price: 44.99,
    image: "/racing-car.png",
    rarity: "Common",
    collection: "Vehicle Series",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 8,
    name: "Pixel Art Potion Set",
    description: "Collection of magical potions with different effects",
    price: 34.99,
    image: "/potions.png",
    rarity: "Common",
    collection: "Magic Items",
    isNew: false,
    isFeatured: false,
  },
];

const collections = [
  "All Collections",
  "Heroes Series",
  "Space Series",
  "Fantasy Creatures",
  "Dungeon Items",
  "Landmark Series",
  "Vehicle Series",
  "Magic Items",
];

const rarities = ["All Rarities", "Common", "Rare", "Epic"];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Randomize pixel art colors for demonstration
  const colorClasses = [
    "bg-retro-red",
    "bg-retro-blue",
    "bg-retro-yellow",
    "bg-retro-green",
    "bg-retro-purple",
    "bg-retro-orange",
    "bg-retro-pink",
  ];
  
  const getRandomColorClass = () => {
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
  };

  return (
    <Card 
      className="pixel-card group overflow-hidden transition-all duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image - we'll use a generated pixel art placeholder */}
      <div className="aspect-square relative overflow-hidden p-4">
        {/* Simple pixel art representation as placeholder */}
        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
          <div className="w-3/4 h-3/4 grid grid-cols-8 grid-rows-8 gap-0.5">
            {Array.from({ length: 64 }).map((_, index) => (
              <div 
                key={index} 
                className={`${
                  // Create a simple pixel art pattern based on product id
                  (index % (product.id * 2) === 0 || index % (product.id * 3) === 0) 
                    ? getRandomColorClass()
                    : "bg-gray-100"
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Quick action buttons */}
        <div className={`absolute top-2 right-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-sm"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart 
              className={`h-4 w-4 ${isFavorite ? 'fill-retro-red text-retro-red' : 'text-muted-foreground'}`} 
            />
          </Button>
        </div>
        
        {/* Rarity badge */}
        <Badge 
          className={`absolute bottom-6 left-6 ${
            product.rarity === "Common" 
              ? "bg-blue-100 text-blue-800" 
              : product.rarity === "Rare" 
              ? "bg-purple-100 text-purple-800" 
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {product.rarity}
        </Badge>
        
        {/* New badge */}
        {product.isNew && (
          <Badge className="absolute top-6 left-6 bg-retro-red text-white">
            New
          </Badge>
        )}
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <h3 className="font-semibold truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground h-10 overflow-hidden">
          {product.description}
        </p>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground">{product.collection}</span>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button 
            className="bg-retro-dark-blue hover:bg-retro-dark-blue/90 text-white"
            asChild
          >
            <Link to={`/product/${product.id}`}>
              <Eye className="mr-1 h-4 w-4" /> View
            </Link>
          </Button>
          <Button 
            className="bg-retro-orange hover:bg-retro-orange/90 text-white"
          >
            <ShoppingCart className="mr-1 h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [collection, setCollection] = useState("All Collections");
  const [rarity, setRarity] = useState("All Rarities");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  
  // Filter products based on search term, collection, rarity, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCollection = collection === "All Collections" || product.collection === collection;
    
    const matchesRarity = rarity === "All Rarities" || product.rarity === rarity;
    
    const matchesPriceRange = 
      product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCollection && matchesRarity && matchesPriceRange;
  });
  
  // Sort products based on sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price_low":
        return a.price - b.price;
      case "price_high":
        return b.price - a.price;
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      case "featured":
      default:
        return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero banner */}
        <div className="bg-gradient-to-r from-retro-blue/20 to-retro-pink/20 py-12">
          <div className="pixel-container">
            <h1 className="text-4xl font-bold mb-4">Pixel Art Collectibles</h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore our diverse collection of unique pixel art treasures. Each piece 
              is crafted with attention to detail, bringing retro gaming nostalgia to life.
            </p>
          </div>
        </div>
        
        {/* Shop content */}
        <div className="pixel-container py-10">
          {/* Search and filter controls */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search for collectibles..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {showFilters ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Expandable filters */}
            {showFilters && (
              <div className="bg-muted/30 p-4 rounded-lg mb-4 animate-pixel-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Collection</label>
                    <Select value={collection} onValueChange={setCollection}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select collection" />
                      </SelectTrigger>
                      <SelectContent>
                        {collections.map((col) => (
                          <SelectItem key={col} value={col}>
                            {col}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Rarity</label>
                    <Select value={rarity} onValueChange={setRarity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rarity" />
                      </SelectTrigger>
                      <SelectContent>
                        {rarities.map((rar) => (
                          <SelectItem key={rar} value={rar}>
                            {rar}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-1 block">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <Slider 
                      defaultValue={[0, 100]} 
                      max={100} 
                      step={1} 
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      className="py-4"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Results count */}
            <div className="text-sm text-muted-foreground">
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? "item" : "items"}
            </div>
          </div>
          
          {/* Product grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No collectibles found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any collectibles matching your current filters.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setCollection("All Collections");
                  setRarity("All Rarities");
                  setPriceRange([0, 100]);
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
