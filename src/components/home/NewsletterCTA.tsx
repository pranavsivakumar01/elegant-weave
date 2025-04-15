
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll now receive our latest updates, exclusive offers, and fashion inspiration.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20 bg-grt-maroon text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="heading-md mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Stay updated with our latest collections, exclusive offers, and fashion inspiration. Join our community of style enthusiasts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-grt-gold"
            />
            <Button type="submit" className="bg-grt-gold hover:bg-grt-gold/90 text-grt-dark whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
          
          <p className="text-xs text-white/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from GRT Textile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
