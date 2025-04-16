
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Minus, 
  Plus, 
  ArrowLeft, 
  X, 
  CreditCard, 
  ShoppingBag,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutDialog from "@/components/CheckoutDialog";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Pixel Hero Character",
    description: "Classic 16-bit hero character with sword and shield",
    price: 49.99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Fantasy Dragon",
    description: "Fearsome fire-breathing dragon from the golden age of RPGs",
    price: 89.99,
    quantity: 1,
  },
  {
    id: 4,
    name: "Pixel Treasure Chest",
    description: "Animated treasure chest filled with pixel gold and gems",
    price: 39.99,
    quantity: 1,
  },
];

const CartItem = ({ 
  item, 
  updateQuantity, 
  removeItem 
}: { 
  item: typeof initialCartItems[0]; 
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}) => {
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
    <div className="flex flex-col sm:flex-row py-6 border-b border-dashed border-black gap-4">
      {/* Product image - pixel art placeholder */}
      <div className="w-24 h-24 flex-shrink-0">
        <div className="w-full h-full flex items-center justify-center bg-gray-50 border-2 border-black rounded-lg overflow-hidden">
          <div className="w-3/4 h-3/4 grid grid-cols-8 grid-rows-8 gap-0.5 pixel-img">
            {Array.from({ length: 64 }).map((_, index) => (
              <div 
                key={index} 
                className={`${
                  (index % (item.id * 2) === 0 || index % (item.id * 3) === 0) 
                    ? getRandomColorClass()
                    : "bg-gray-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Item info */}
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <button 
            onClick={() => removeItem(item.id)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border-2 border-black rounded-md overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
            <button 
              className="px-3 py-1 hover:bg-muted border-r-2 border-black"
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-3 py-1 border-r-2 border-black">{item.quantity}</span>
            <button 
              className="px-3 py-1 hover:bg-muted"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="font-semibold font-mono">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  
  const updateQuantity = (id: number, quantity: number) => {
    // Removed the quantity limit - now can increase beyond 3
    setCartItems(prev => 
      prev.map(item => item.id === id ? {...item, quantity} : item)
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = 10.00;
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="pixel-container py-10">
          <div className="flex items-center mb-6">
            <Link to="/shop" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
            <h1 className="text-3xl font-bold mx-auto">Your Pixel Cart</h1>
          </div>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                    <Button 
                      variant="ghost" 
                      onClick={clearCart}
                      className="text-muted-foreground text-sm"
                    >
                      Clear All
                    </Button>
                  </div>
                  <div className="space-y-1">
                    {cartItems.map(item => (
                      <CartItem 
                        key={item.id} 
                        item={item} 
                        updateQuantity={updateQuantity} 
                        removeItem={removeItem}
                      />
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link to="/shop">
                      <Button variant="outline" className="w-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Order summary */}
              <div>
                <div className="bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-mono">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-mono">${shippingFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t-2 border-dashed border-black pt-2 mt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="font-mono">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-retro-orange hover:bg-retro-orange/90 text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
                    onClick={() => setCheckoutOpen(true)}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-4 flex items-center justify-center text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-retro-blue/10 rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-10 w-10 text-retro-blue" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Looks like you haven't added any pixel art collectibles to your cart yet.
              </p>
              <Button asChild className="border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
                <Link to="/shop" className="bg-retro-blue hover:bg-retro-blue/90 text-white">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Browse Shop
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      {/* Checkout Dialog */}
      <CheckoutDialog 
        open={checkoutOpen} 
        onOpenChange={setCheckoutOpen} 
        totalAmount={total}
      />
    </div>
  );
};

export default Cart;
