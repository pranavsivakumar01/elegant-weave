
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const collections = {
  sarees: [
    {
      id: "s1",
      name: "Kanchipuram Silk",
      description: "Traditional silk sarees from Tamil Nadu known for their durability and rich appearance.",
      image: "https://images.unsplash.com/photo-1610756394686-921af501cf1a?q=80&w=2574&auto=format&fit=crop",
      price: "₹18,500"
    },
    {
      id: "s2",
      name: "Banarasi Brocade",
      description: "Opulent silk sarees with intricate zari work, originating from Varanasi.",
      image: "https://images.unsplash.com/photo-1610469076003-1f581e1d29fc?q=80&w=2574&auto=format&fit=crop",
      price: "₹22,000"
    },
    {
      id: "s3",
      name: "Chanderi Cotton-Silk",
      description: "Lightweight sarees with a shimmering texture, perfect for semi-formal occasions.",
      image: "https://images.unsplash.com/photo-1583391123931-9671408e8cfb?q=80&w=2574&auto=format&fit=crop",
      price: "₹8,500"
    },
    {
      id: "s4",
      name: "Patola Weave",
      description: "Double ikat woven sarees from Gujarat with geometric patterns.",
      image: "https://images.unsplash.com/photo-1598300042183-ff44ce8003d0?q=80&w=2574&auto=format&fit=crop",
      price: "₹29,500"
    }
  ],
  kurtas: [
    {
      id: "k1",
      name: "Chikankari Embroidered",
      description: "Cotton kurtas featuring delicate Lucknowi threadwork embroidery.",
      image: "https://images.unsplash.com/photo-1583391123921-16f4b668f180?q=80&w=2574&auto=format&fit=crop",
      price: "₹4,200"
    },
    {
      id: "k2",
      name: "Block Print Angrakha",
      description: "Overlapping front style with traditional hand block prints.",
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2574&auto=format&fit=crop",
      price: "₹3,800"
    },
    {
      id: "k3",
      name: "Silk Chanderi",
      description: "Elegant kurtas made from silk-cotton blend with golden buttis.",
      image: "https://images.unsplash.com/photo-1583267574373-03e6fe0e2c4f?q=80&w=2670&auto=format&fit=crop",
      price: "₹5,500"
    },
    {
      id: "k4",
      name: "Kalamkari Printed",
      description: "Kurtas featuring traditional vegetable-dyed Kalamkari art.",
      image: "https://images.unsplash.com/photo-1604151884061-ee927f87d4f7?q=80&w=2574&auto=format&fit=crop",
      price: "₹4,800"
    }
  ],
  western: [
    {
      id: "w1",
      name: "Ikat Wrap Dress",
      description: "Contemporary wrap dress made with traditional ikat-dyed fabric.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2562&auto=format&fit=crop",
      price: "₹6,800"
    },
    {
      id: "w2",
      name: "Ajrakh Palazzo Set",
      description: "Modern crop top and palazzo pants with traditional Ajrakh prints.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop",
      price: "₹7,200"
    },
    {
      id: "w3",
      name: "Handloom Culottes",
      description: "Comfortable wide-leg pants made from handloom cotton.",
      image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=2574&auto=format&fit=crop",
      price: "₹3,400"
    },
    {
      id: "w4",
      name: "Indigo Denim Jacket",
      description: "Denim jacket with traditional kantha embroidery details.",
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=2574&auto=format&fit=crop",
      price: "₹5,200"
    }
  ],
  mens: [
    {
      id: "m1",
      name: "Silk Brocade Kurta",
      description: "Luxurious kurta with intricate brocade work for special occasions.",
      image: "https://images.unsplash.com/photo-1580870155177-e45d22e9d341?q=80&w=2672&auto=format&fit=crop",
      price: "₹8,500"
    },
    {
      id: "m2",
      name: "Linen Nehru Jacket",
      description: "Sophisticated Nehru collar jacket in breathable linen fabric.",
      image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=2580&auto=format&fit=crop",
      price: "₹6,200"
    },
    {
      id: "m3",
      name: "Handloom Cotton Kurta",
      description: "Comfortable everyday kurta made from handwoven cotton.",
      image: "https://images.unsplash.com/photo-1553521041-d168e2401b0d?q=80&w=2670&auto=format&fit=crop",
      price: "₹3,800"
    },
    {
      id: "m4",
      name: "Block Print Dhoti Set",
      description: "Traditional dhoti paired with a matching kurta featuring hand block prints.",
      image: "https://images.unsplash.com/photo-1567889124760-6725a36c42fc?q=80&w=2574&auto=format&fit=crop",
      price: "₹7,500"
    }
  ]
};

const CollectionCard = ({ item }: { item: typeof collections.sarees[0] }) => {
  return (
    <div className="group">
      <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button className="bg-grt-gold hover:bg-grt-gold/90 text-grt-dark w-full">
            View Details
          </Button>
        </div>
      </div>
      <h3 className="font-playfair text-lg mb-1">{item.name}</h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
      <p className="font-medium text-grt-maroon">{item.price}</p>
    </div>
  );
};

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 bg-gradient-to-b from-grt-gold/10 to-white">
        <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="heading-xl mb-6">Our Collections</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our carefully curated collections that blend traditional craftsmanship with contemporary designs.
          </p>
        </div>
      </section>
      
      {/* Collection Tabs */}
      <section className="section-container">
        <Tabs defaultValue="sarees" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto mb-12">
            <TabsTrigger value="sarees" className="text-base px-6">Traditional Sarees</TabsTrigger>
            <TabsTrigger value="kurtas" className="text-base px-6">Designer Kurtas</TabsTrigger>
            <TabsTrigger value="western" className="text-base px-6">Western Fusion</TabsTrigger>
            <TabsTrigger value="mens" className="text-base px-6">Men's Ethnic</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sarees">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections.sarees.map((item) => (
                <CollectionCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="kurtas">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections.kurtas.map((item) => (
                <CollectionCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="western">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections.western.map((item) => (
                <CollectionCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mens">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections.mens.map((item) => (
                <CollectionCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            These are just a few selections from our extensive collection. Visit our stores to explore more.
          </p>
          <Button asChild className="bg-grt-maroon hover:bg-grt-maroon/90 text-white">
            <Link to="/stores">Find a Store</Link>
          </Button>
        </div>
      </section>
      
      {/* Craftsmanship Feature */}
      <section className="bg-grt-light/50 py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1598300042283-021bd6ff0ec7?q=80&w=2574&auto=format&fit=crop" 
                    alt="Textile craftsmanship" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-grt-gold/20 -z-10"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="heading-lg">Our Craftsmanship</h2>
              <p className="text-gray-700 leading-relaxed">
                Each piece in our collection represents hours of meticulous craftsmanship by skilled artisans who have inherited techniques passed down through generations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From hand block printing and natural dyeing to intricate embroidery and handloom weaving, we preserve traditional techniques while innovating with contemporary designs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to quality ensures that every garment not only looks beautiful but also stands the test of time, becoming a cherished part of your wardrobe.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Collections;
