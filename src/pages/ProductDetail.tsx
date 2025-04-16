import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Star, 
  CheckCircle,
  Truck,
  ShieldCheck,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PixelImage from "../components/PixelImage";
import { useToast } from "../components/ToastProvider";

// Mock product data
const products = [
  {
    id: 1,
    name: "Pixel Hero Character",
    description: "Classic 16-bit hero character with sword and shield, inspired by the golden era of adventure games. This detailed pixel art collectible captures the essence of retro gaming with meticulous attention to detail.",
    longDescription: `This pixel art hero character is a tribute to the iconic protagonists of 16-bit era adventure games. Meticulously crafted with authentic pixel techniques, this collectible captures the charm and nostalgia of retro gaming.

The hero stands in a classic pose, sword and shield at the ready, with a determined expression that defined the silent protagonists of that golden gaming era. Every pixel has been placed with care to ensure authenticity to the original art style.

This digital collectible includes multiple animation frames, allowing you to display the character in various classic poses - from the iconic idle stance to battle-ready positions.`,
    price: 49.99,
    originalPrice: 59.99,
    image: "/hero-character.png",
    rarity: "Common",
    collection: "Heroes Series",
    isNew: true,
    isFeatured: true,
    inStock: true,
    tags: ["Character", "Adventure", "16-bit", "Hero", "Sword", "Shield"],
    specifications: [
      { name: "Dimensions", value: "32x32 pixels" },
      { name: "Format", value: "PNG with transparent background" },
      { name: "Frames", value: "8 animation frames" },
      { name: "Style", value: "16-bit pixel art" },
      { name: "Era", value: "Inspired by early 90s gaming" },
    ],
    relatedProducts: [2, 5, 7],
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
    inStock: true,
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
    inStock: false,
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
    inStock: true,
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
    inStock: true,
  },
];

const PixelArtPreview = ({ productId }: { productId: number }) => {
  // Generate pixel art based on product ID for demonstration
  // This would be an actual image in a real application
  
  const colorClasses = [
    "bg-retro-red",
    "bg-retro-blue",
    "bg-retro-yellow",
    "bg-retro-green",
    "bg-retro-purple",
    "bg-retro-orange",
    "bg-retro-pink",
  ];
  
  const getColorClass = (index: number) => {
    const pattern = (index % (productId * 3) === 0 || (index + productId) % 5 === 0);
    if (pattern) {
      return colorClasses[(productId + index) % colorClasses.length];
    }
    return "bg-gray-100";
  };

  return (
    <div className="w-full aspect-square bg-white rounded-xl overflow-hidden shadow-md p-6 pixel-border border-retro-blue">
      <div className="w-full h-full grid grid-cols-16 grid-rows-16 gap-0.5">
        {Array.from({ length: 256 }).map((_, index) => (
          <div 
            key={index} 
            className={getColorClass(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const RelatedProductCard = ({ productId }: { productId: number }) => {
  const product = products.find(p => p.id === productId);
  
  if (!product) return null;
  
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="rounded-lg overflow-hidden pixel-card">
        <div className="aspect-square bg-white p-4">
          <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Simple placeholder for product image */}
            <div className="w-3/4 h-3/4 grid grid-cols-8 grid-rows-8 gap-0.5">
              {Array.from({ length: 64 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`${
                    (index % (product.id * 2) === 0 || index % (product.id * 3) === 0) 
                      ? "bg-retro-blue"
                      : (index % (product.id) === 0)
                      ? "bg-retro-red"
                      : "bg-gray-100"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-sm truncate">{product.name}</h3>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
            <Badge 
              className={`text-xs ${
                product.rarity === "Common" 
                  ? "bg-blue-100 text-blue-800" 
                  : product.rarity === "Rare" 
                  ? "bg-purple-100 text-purple-800" 
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {product.rarity}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { showToast } = useToast();
  
  // Find the product by ID
  const productId = Number(id);
  const product = products.find(p => p.id === productId);
  
  // Handle invalid product ID
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pixel-container py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              The collectible you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/shop">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, url });
        showToast("Shared successfully!", "success");
      } catch {
        showToast("Share cancelled.", "info");
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        showToast("Link copied!", "success");
      } catch {
        showToast("Failed to copy link.", "error");
      }
    }
  };

  // Generate mock images for demonstration
  const productImages = [0, 1, 2, 3].map(index => ({
    id: index,
    alt: `${product.name} view ${index + 1}`
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-3">
          <div className="pixel-container">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-foreground">Shop</Link>
              <span className="mx-2">/</span>
              <Link to={`/collections/${product.collection}`} className="hover:text-foreground">
                {product.collection}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>
        
        {/* Product details */}
        <div className="pixel-container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product images */}
            <div>
              <div className="mb-4 relative">
                <PixelImage
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square"
                />
                {/* Share button */}
                <button
                  aria-label="Share"
                  onClick={handleShare}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow pixel-border transition-transform hover:scale-110 active:scale-95 animate-bounce-on-hover"
                  tabIndex={0}
                >
                  <Share2 className="w-5 h-5 text-retro-blue" />
                </button>
              </div>
              
              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square rounded-md overflow-hidden ${
                      activeImageIndex === index 
                        ? 'ring-2 ring-primary' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <PixelArtPreview productId={product.id} />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product info */}
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags?.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-muted">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Title and rarity */}
              <div className="flex items-start justify-between">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <Badge 
                  className={`${
                    product.rarity === "Common" 
                      ? "bg-blue-100 text-blue-800" 
                      : product.rarity === "Rare" 
                      ? "bg-purple-100 text-purple-800" 
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {product.rarity}
                </Badge>
              </div>
              
              {/* Collection */}
              <div className="text-muted-foreground mb-4">
                From the <Link to={`/collections/${product.collection}`} className="text-primary hover:underline">{product.collection}</Link>
              </div>
              
              {/* Prices */}
              <div className="flex items-baseline mb-6">
                <span className="text-2xl font-bold mr-2">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              
              {/* Add to cart section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center border rounded-md mr-4">
                    <button 
                      onClick={decrementQuantity}
                      className="px-3 py-2 text-muted-foreground hover:text-foreground"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center">{quantity}</span>
                    <button 
                      onClick={incrementQuantity}
                      className="px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {product.inStock ? (
                    <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-grow bg-retro-orange hover:bg-retro-orange/90 text-white px-10 pixel-btn"
                    size="lg"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="icon"
                    className="pixel-btn"
                    onClick={toggleFavorite}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-retro-red text-retro-red' : ''}`} />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="icon"
                    className="pixel-btn"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Product features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-muted/30 p-3 rounded-lg">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-retro-green" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Authentic Pixel Art</p>
                    <p className="text-muted-foreground">Original design</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-muted/30 p-3 rounded-lg">
                  <div className="flex-shrink-0">
                    <Truck className="h-5 w-5 text-retro-blue" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Instant Delivery</p>
                    <p className="text-muted-foreground">Digital download</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-muted/30 p-3 rounded-lg">
                  <div className="flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-retro-orange" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Secure License</p>
                    <p className="text-muted-foreground">Personal use</p>
                  </div>
                </div>
              </div>
              
              {/* Tabs for additional information */}
              <Tabs defaultValue="details">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="pt-4">
                  <div className="prose max-w-none">
                    <p>{product.longDescription}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="specifications" className="pt-4">
                  <div className="space-y-4">
                    {product.specifications?.map((spec, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 pb-2 border-b">
                        <div className="font-medium">{spec.name}</div>
                        <div className="col-span-2 text-muted-foreground">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="pt-4">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star 
                          key={index} 
                          className={`h-5 w-5 ${
                            index < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      Based on 24 reviews
                    </span>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="review-1">
                      <AccordionTrigger>
                        <div className="flex items-center text-left">
                          <div className="flex items-center mr-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Star 
                                key={index} 
                                className={`h-4 w-4 ${
                                  index < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                                }`} 
                              />
                            ))}
                          </div>
                          <div>
                            <span className="font-medium mr-2">Amazing quality!</span>
                            <span className="text-sm text-muted-foreground">by PixelFan84</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          The attention to detail in this pixel art is incredible. Perfectly captures
                          the nostalgia of classic gaming while still feeling fresh and original.
                          Instantly became the centerpiece of my collection!
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="review-2">
                      <AccordionTrigger>
                        <div className="flex items-center text-left">
                          <div className="flex items-center mr-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Star 
                                key={index} 
                                className={`h-4 w-4 ${
                                  index < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                                }`} 
                              />
                            ))}
                          </div>
                          <div>
                            <span className="font-medium mr-2">Great addition to my collection</span>
                            <span className="text-sm text-muted-foreground">by RetroGamer2000</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">
                          The animation frames are smooth and the character design is exactly what I was 
                          looking for. Would definitely recommend to other pixel art enthusiasts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <div className="bg-muted/30 py-12">
            <div className="pixel-container">
              <h2 className="text-2xl font-bold mb-6">You may also like</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.relatedProducts.map(relatedId => (
                  <RelatedProductCard key={relatedId} productId={relatedId} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
