
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529903092258-180f1401a128?q=80&w=2670&auto=format&fit=crop",
    title: "Traditional Elegance",
    subtitle: "Handcrafted with Love",
    description: "Discover our exquisite collection of heritage textiles meticulously crafted by master artisans."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1610756394686-921af501cf1a?q=80&w=2574&auto=format&fit=crop",
    title: "Contemporary Fashion",
    subtitle: "Modern Fusion",
    description: "Explore our innovative designs that blend traditional craftsmanship with contemporary aesthetics."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583267574373-03e6fe0e2c4f?q=80&w=2670&auto=format&fit=crop",
    title: "Premium Fabrics",
    subtitle: "Sustainable Luxury",
    description: "Experience the richness of ethically sourced materials that respect both tradition and the environment."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative h-full w-full flex items-center z-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-xl text-white space-y-6 animate-fade-in">
            <h3 className="text-grt-gold font-medium tracking-wider">
              {slides[currentSlide].subtitle}
            </h3>
            <h1 className="heading-xl text-white">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-grt-gold hover:bg-grt-gold/90 text-grt-dark font-medium"
              >
                Explore Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-grt-dark"
              >
                Find Your Style
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide 
                ? "bg-grt-gold w-10" 
                : "bg-white/50 hover:bg-white"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
