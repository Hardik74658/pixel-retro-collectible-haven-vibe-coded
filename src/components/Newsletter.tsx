
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this to a backend
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-retro-blue/20 to-retro-pink/20 relative overflow-hidden">
      {/* Pixel art decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 flex">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`h-full flex-1 ${
              i % 5 === 0
                ? "bg-retro-pink"
                : i % 5 === 1
                ? "bg-retro-blue"
                : i % 5 === 2
                ? "bg-retro-yellow"
                : i % 5 === 3
                ? "bg-retro-green"
                : "bg-retro-purple"
            }`}
          ></div>
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-2 flex">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`h-full flex-1 ${
              i % 5 === 0
                ? "bg-retro-purple"
                : i % 5 === 1
                ? "bg-retro-green"
                : i % 5 === 2
                ? "bg-retro-yellow"
                : i % 5 === 3
                ? "bg-retro-blue"
                : "bg-retro-pink"
            }`}
          ></div>
        ))}
      </div>
      
      <div className="pixel-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 mx-auto bg-retro-red/10 rounded-xl flex items-center justify-center">
              <Mail className="h-8 w-8 text-retro-red" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Join Our Pixel Art Community</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter and be the first to know about new collectible releases, 
            limited editions, exclusive discounts, and pixel art tutorials.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-12 rounded-lg border-2 px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit"
              className="pixel-btn h-12 bg-retro-red hover:bg-retro-red/90 text-white px-6"
              disabled={subscribed}
            >
              {subscribed ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
