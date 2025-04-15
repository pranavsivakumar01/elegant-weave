
import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section className="section-container overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl lg:order-1 animate-fade-in">
          <h2 className="heading-lg">
            <span className="text-grt-maroon">Our</span> Brand Story
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Since 1976, GRT Textile has been weaving the rich heritage of Indian textiles with contemporary designs. What began as a small family shop in Chennai has grown into a prestigious brand known for its quality and craftsmanship.
          </p>
          <p className="leading-relaxed text-gray-600">
            Our commitment to preserving traditional techniques while embracing modern aesthetics has made us a trusted name in the textile industry. Every piece we create tells a story of our heritage, our artisans, and our passion for textiles.
          </p>
          <Button className="bg-grt-maroon hover:bg-grt-maroon/90 text-white mt-4">
            Read Our Story
          </Button>
        </div>
        
        <div className="relative animate-slide-in">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-grt-light rounded-full opacity-70 z-0"></div>
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1594570093010-e92716fcc805?q=80&w=2574&auto=format&fit=crop" 
              alt="GRT Textile craftsman working on traditional loom" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-grt-gold/20 rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
