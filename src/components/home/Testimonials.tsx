
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Fashion Influencer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    content: "GRT Textile's sarees are simply exquisite. The craftsmanship and attention to detail are unmatched. Their designs perfectly blend traditional patterns with modern aesthetics, making them suitable for both formal occasions and contemporary styling.",
    rating: 5
  },
  {
    id: 2,
    name: "Raj Malhotra",
    role: "Fashion Blogger",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    content: "The quality of fabrics at GRT Textile is phenomenal. I've been wearing their kurtas for years, and they've become a staple in my wardrobe. What sets them apart is not just the design but the comfort and durability of their clothing.",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Desai",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
    content: "As a designer myself, I deeply appreciate the artistry in GRT Textile's collections. Their commitment to preserving traditional techniques while innovating with designs is inspiring. Their fabrics are a joy to work with and wear.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-container bg-gradient-to-b from-white to-grt-light/30">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">What Our Customers Say</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our customers are at the heart of everything we do. Here's what they have to say about their GRT Textile experience.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Cards */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white shadow-lg rounded-lg p-8 border border-grt-gold/10">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < testimonial.rating ? "text-grt-gold fill-grt-gold" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button 
            variant="outline"
            size="icon"
            className="rounded-full border-grt-gold/30 text-grt-gold hover:bg-grt-gold/10 hover:text-grt-gold"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="rounded-full border-grt-gold/30 text-grt-gold hover:bg-grt-gold/10 hover:text-grt-gold"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === activeIndex ? "bg-grt-gold w-6" : "bg-grt-gold/30 hover:bg-grt-gold/50"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
