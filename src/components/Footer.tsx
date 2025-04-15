
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import GRTLogo from './GRTLogo';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    toast({
      title: "Subscribed!",
      description: `Thank you for subscribing with ${email}. You'll receive our newsletter soon.`,
    });
    
    form.reset();
  };

  return (
    <footer className="bg-grt-dark text-grt-ivory pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <GRTLogo className="text-grt-gold" />
            <p className="text-sm text-grt-ivory/80 mt-4 max-w-xs">
              Premium clothing brand known for heritage, quality, and fashion-forward designs. Blending tradition with contemporary style since 1976.
            </p>
            <div className="flex space-x-4 text-grt-ivory/80">
              <a href="#" className="hover:text-grt-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-grt-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-grt-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-grt-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-6 border-b border-grt-gold/20 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-grt-gold transition-colors inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-grt-gold transition-colors inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-grt-gold transition-colors inline-block">Collections</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-grt-gold transition-colors inline-block">Offers & Promotions</Link>
              </li>
              <li>
                <Link to="/stores" className="hover:text-grt-gold transition-colors inline-block">Store Locator</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-grt-gold transition-colors inline-block">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg mb-6 border-b border-grt-gold/20 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-grt-gold" />
                <span>42-A, Fashion Street, Textile Hub, Chennai - 600001, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-grt-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-grt-gold" />
                <span>info@grttextile.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg mb-6 border-b border-grt-gold/20 pb-2">Newsletter</h4>
            <p className="text-sm text-grt-ivory/80 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-grt-dark/50 border-grt-gold/30 focus-visible:ring-grt-gold text-grt-ivory placeholder:text-grt-ivory/50"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-grt-gold hover:bg-grt-gold/90 text-grt-dark"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-grt-gold/20 pt-6 mt-8 text-center text-xs text-grt-ivory/60">
          <p>&copy; {new Date().getFullYear()} GRT Textile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
