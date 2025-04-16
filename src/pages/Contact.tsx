
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle form submission here
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-retro-blue/20 to-retro-pink/20 py-16">
          <div className="pixel-container text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our pixel art collectibles? Want to collaborate with us? 
              Reach out and our team will get back to you soon!
            </p>
          </div>
        </section>
        
        {/* Contact form and info */}
        <section className="py-16">
          <div className="pixel-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <div className="bg-white rounded-xl p-6 shadow-sm pixel-border border-retro-blue">
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="mb-4">
                      <CheckCircle className="h-16 w-16 text-retro-green mx-auto" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-retro-blue hover:bg-retro-blue/90 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Your Name
                          </label>
                          <Input 
                            id="name" 
                            type="text" 
                            placeholder="John Doe" 
                            required 
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address
                          </label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="you@example.com" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          type="text" 
                          placeholder="How can we help you?" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your inquiry..." 
                          rows={5} 
                          required 
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full pixel-btn bg-retro-orange hover:bg-retro-orange/90 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
              
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-retro-green/20 flex items-center justify-center text-retro-green">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Pixel Street, Game City, 98765<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-retro-blue/20 flex items-center justify-center text-retro-blue">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Number</h3>
                      <p className="text-muted-foreground">
                        +1 (234) 567-8901<br />
                        Monday - Friday, 9am - 5pm EST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-retro-red/20 flex items-center justify-center text-retro-red">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <p className="text-muted-foreground">
                        hello@pixelhaven.com<br />
                        support@pixelhaven.com
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Pixel art map */}
                <div className="mt-10 w-full aspect-video bg-white rounded-lg shadow-sm overflow-hidden pixel-border border-muted">
                  <div className="w-full h-full p-4 bg-blue-50 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 grid grid-cols-16 grid-rows-12 gap-0.5">
                      {/* Simple pixel art map */}
                      <div className="col-start-1 col-end-17 row-start-1 row-end-9 bg-retro-blue/30"></div>
                      <div className="col-start-4 col-end-7 row-start-4 row-end-7 bg-retro-green"></div>
                      <div className="col-start-10 col-end-14 row-start-3 row-end-5 bg-retro-green"></div>
                      <div className="col-start-1 col-end-17 row-start-9 row-end-13 bg-retro-yellow/50"></div>
                      <div className="col-start-5 col-end-8 row-start-6 row-end-9 bg-retro-pink"></div>
                      <div className="col-start-12 col-end-14 row-start-7 row-end-9 bg-retro-orange"></div>
                      <div className="col-start-9 col-end-10 row-start-8 row-end-9 bg-retro-red animate-pixel-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
