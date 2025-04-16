
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Check, Lock, ArrowRight } from "lucide-react";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalAmount: number;
}

const CheckoutDialog = ({ open, onOpenChange, totalAmount }: CheckoutDialogProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState<"details" | "processing" | "complete">("details");
  const [cardFlipped, setCardFlipped] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    
    // Simulate processing delay
    setTimeout(() => {
      setStep("complete");
    }, 2000);
  };

  const handleComplete = () => {
    toast({
      title: "Payment Successful!",
      description: "Your pixel art collectibles will be delivered to your account.",
      variant: "default",
    });
    onOpenChange(false);
    // Reset step for next time
    setTimeout(() => setStep("details"), 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-4 border-black pixel-card overflow-hidden">
        {/* Changed the background to be more subtle and less pixelated */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-retro-blue/10 via-retro-pink/10 to-retro-purple/10 opacity-40"></div>
        
        {step === "details" && (
          <>
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-2xl font-bold text-center">Checkout</DialogTitle>
              <DialogDescription className="text-center">
                Enter your payment details to continue
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              {/* Fixed credit card animation to prevent it from affecting cursor interactions */}
              <div 
                className="w-full h-48 relative rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] bg-gradient-to-br from-retro-orange via-retro-red to-retro-purple"
              >
                {/* Front of Card */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${cardFlipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-8 bg-retro-yellow grid grid-cols-4 grid-rows-4 pixel-img">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className={i % 2 === 0 ? "bg-retro-orange" : "bg-transparent"} />
                        ))}
                      </div>
                      <div className="text-xs font-mono text-white">PIXEL CARD</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="font-mono text-white text-lg tracking-widest">**** **** **** ****</div>
                      <div className="flex justify-between">
                        <div className="text-xs text-white/80">
                          <div>CARD HOLDER</div>
                          <div className="font-mono">PIXEL ART FAN</div>
                        </div>
                        <div className="text-xs text-white/80">
                          <div>EXPIRES</div>
                          <div className="font-mono">12/28</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Back of Card */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${cardFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <div className="h-full flex flex-col">
                    <div className="bg-black h-10 mt-6"></div>
                    <div className="px-6 py-3">
                      <div className="bg-white/90 h-8 flex items-center justify-end px-3">
                        <span className="font-mono text-sm">123</span>
                      </div>
                      <div className="mt-6 text-xs text-white/80 font-mono text-center">
                        This is a virtual card for purchasing pixel art collectibles.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setCardFlipped(!cardFlipped)}
                  className="text-xs"
                >
                  {cardFlipped ? "View Front" : "View Back"}
                </Button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <div className="border-2 border-black flex items-center bg-white rounded-md overflow-hidden">
                    <CreditCard className="h-4 w-4 ml-3 text-muted-foreground" />
                    <input 
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      className="flex-1 p-2 bg-transparent focus:outline-none text-sm font-mono"
                      defaultValue="4242 4242 4242 4242"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input 
                    type="text"
                    placeholder="MM/YY"
                    className="border-2 border-black w-full p-2 rounded-md text-sm font-mono bg-white"
                    defaultValue="12/28"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input 
                    type="text"
                    placeholder="123"
                    className="border-2 border-black w-full p-2 rounded-md text-sm font-mono bg-white"
                    defaultValue="123"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Name on Card</label>
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="border-2 border-black w-full p-2 rounded-md text-sm bg-white"
                  defaultValue="Pixel Art Fan"
                />
              </div>
              
              <DialogFooter className="mt-4">
                <Button type="submit" className="w-full text-white bg-retro-green hover:bg-retro-green/90">
                  Pay ${totalAmount.toFixed(2)}
                  <Lock className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
        
        {step === "processing" && (
          <div className="py-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 animate-pixel-bounce mb-6">
              <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-0.5">
                {Array.from({ length: 64 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${
                      [10, 11, 12, 13, 18, 21, 26, 29, 34, 37, 42, 45, 50, 53, 50, 51, 52, 53].includes(index) 
                        ? "bg-retro-green" 
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
            <DialogTitle className="text-xl font-bold text-center mb-2">Processing Payment</DialogTitle>
            <DialogDescription className="text-center">
              Please wait while we process your payment...
            </DialogDescription>
          </div>
        )}
        
        {step === "complete" && (
          <div className="py-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-retro-green/20 rounded-full flex items-center justify-center mb-4">
              <Check className="h-10 w-10 text-retro-green" />
            </div>
            <DialogTitle className="text-xl font-bold text-center mb-2">Payment Successful!</DialogTitle>
            <DialogDescription className="text-center mb-6">
              Your pixel art collectibles will be delivered to your account.
            </DialogDescription>
            <Button onClick={handleComplete} className="bg-retro-blue hover:bg-retro-blue/90">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
