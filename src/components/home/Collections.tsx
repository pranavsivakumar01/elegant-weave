
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Traditional Sarees",
    description: "Timeless handwoven sarees for every occasion",
    image: "https://images.unsplash.com/photo-1610756394686-921af501cf1a?q=80&w=2574&auto=format&fit=crop",
    slug: "traditional-sarees"
  },
  {
    id: 2,
    name: "Designer Kurtas",
    description: "Contemporary silhouettes with traditional embroidery",
    image: "https://images.unsplash.com/photo-1583267574373-03e6fe0e2c4f?q=80&w=2670&auto=format&fit=crop",
    slug: "designer-kurtas"
  },
  {
    id: 3,
    name: "Western Fusion",
    description: "Modern designs with ethnic inspiration",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop",
    slug: "western-fusion"
  },
  {
    id: 4,
    name: "Men's Ethnic",
    description: "Sophisticated traditional wear for the modern man",
    image: "https://images.unsplash.com/photo-1580870155177-e45d22e9d341?q=80&w=2672&auto=format&fit=crop",
    slug: "mens-ethnic"
  }
];

const CollectionCard = ({ collection }: { collection: typeof collections[0] }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={collection.image} 
          alt={collection.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-playfair text-xl mb-2">{collection.name}</h3>
          <p className="text-sm text-white/80 mb-4">{collection.description}</p>
          <Link 
            to={`/collections/${collection.slug}`}
            className="inline-flex items-center text-sm text-grt-gold hover:text-grt-gold/80 transition-colors"
          >
            Explore Collection <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  return (
    <section className="section-container bg-grt-light/50">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="heading-lg mb-4">Featured Collections</h2>
        <p className="text-gray-700">
          Explore our curated collections that blend tradition with contemporary designs,
          all crafted with the finest materials and exceptional artisanship.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          asChild
          className="bg-grt-maroon hover:bg-grt-maroon/90 text-white"
        >
          <Link to="/collections">View All Collections</Link>
        </Button>
      </div>
    </section>
  );
};

export default Collections;
