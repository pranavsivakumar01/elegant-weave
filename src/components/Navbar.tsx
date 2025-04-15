
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import GRTLogo from './GRTLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-20">
          <GRTLogo className={cn("h-10 w-auto", isScrolled ? "text-grt-dark" : "text-grt-gold")} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-sm hover:text-grt-gold transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-sm hover:text-grt-gold transition-colors">
            About Us
          </Link>
          <Link to="/collections" className="font-medium text-sm hover:text-grt-gold transition-colors">
            Collections
          </Link>
          <Link to="/offers" className="font-medium text-sm hover:text-grt-gold transition-colors">
            Offers
          </Link>
          <Link to="/stores" className="font-medium text-sm hover:text-grt-gold transition-colors">
            Store Locator
          </Link>
          <Link to="/contact" className="font-medium text-sm hover:text-grt-gold transition-colors">
            Contact Us
          </Link>
        </nav>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-4 relative z-20">
          <Button variant="ghost" size="icon" className="text-inherit hover:text-grt-gold">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-inherit hover:text-grt-gold">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-grt-maroon text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-inherit"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-grt-dark/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 transition-transform duration-300 md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center space-y-6 text-grt-ivory">
            <Link 
              to="/" 
              className="text-lg font-medium hover:text-grt-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium hover:text-grt-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/collections" 
              className="text-lg font-medium hover:text-grt-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/offers" 
              className="text-lg font-medium hover:text-grt-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Offers
            </Link>
            <Link 
              to="/stores" 
              className="text-lg font-medium hover:text-grt-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store Locator
            </Link>
            <Link 
              to="/contact" 
              className="text-lg font-medium hover:text-grt-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
