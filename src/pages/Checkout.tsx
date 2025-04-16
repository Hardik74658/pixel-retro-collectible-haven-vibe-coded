import React from "react";
import PixelImage from "../components/PixelImage";
import { useToast } from "../components/ToastProvider";
// ...existing imports...

const Checkout = ({ cart, onCheckout }: { cart: any[]; onCheckout: () => void }) => {
  const { showToast } = useToast();

  const handleCheckout = () => {
    if (!cart.length) {
      showToast("Your cart is empty!", "error");
      return;
    }
    // Simulate checkout
    setTimeout(() => {
      showToast("Checkout successful!", "success");
      onCheckout();
    }, 800);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen pixel-bg flex flex-col">
      {/* ...Navbar, etc... */}
      <main className="flex-grow pixel-container py-12">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        {cart.length === 0 ? (
          <div className="text-center text-retro-red font-pixel text-lg">
            Your cart is empty!
          </div>
        ) : (
          <div>
            <div className="mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4 p-3 rounded-lg bg-white/80 pixel-border">
                  <PixelImage src={item.image} alt={item.name} className="w-16 h-16" />
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-muted-foreground">x{item.quantity}</div>
                  </div>
                  <div className="font-pixel text-retro-blue">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-pixel text-xl text-retro-green">${total.toFixed(2)}</span>
            </div>
            <button
              className="pixel-btn bg-retro-orange text-white rounded-full px-8 py-3 font-pixel text-lg shadow-lg transition-all hover:bg-retro-orange/90 active:scale-95 animate-pixel-press"
              onClick={handleCheckout}
              aria-label="Checkout"
            >
              Checkout
            </button>
          </div>
        )}
      </main>
      {/* ...Footer... */}
    </div>
  );
};

export default Checkout;
