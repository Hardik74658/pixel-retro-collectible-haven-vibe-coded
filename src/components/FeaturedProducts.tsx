
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

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
];

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

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="pixel-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Collectibles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and exclusive pixel art collectibles, 
            carefully crafted for retro gaming enthusiasts and collectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="pixel-btn bg-retro-blue hover:bg-retro-blue/90 text-white"
            size="lg"
            asChild
          >
            <Link to="/shop">
              View All Collectibles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
