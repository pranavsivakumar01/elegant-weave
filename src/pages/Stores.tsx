
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stores = [
  {
    id: 1,
    name: "GRT Textile Flagship Store",
    address: "42-A, T. Nagar, Chennai - 600017",
    phone: "+91 98765 43210",
    hours: "10:00 AM - 8:00 PM (Mon-Sun)",
    image: "https://images.unsplash.com/photo-1551801841-ecad875a5142?q=80&w=2574&auto=format&fit=crop",
    region: "south",
    mapLink: "https://maps.google.com"
  },
  {
    id: 2,
    name: "GRT Textile Premium Outlet",
    address: "24, MG Road, Bangalore - 560001",
    phone: "+91 98765 43211",
    hours: "10:30 AM - 8:30 PM (Mon-Sun)",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    region: "south",
    mapLink: "https://maps.google.com"
  },
  {
    id: 3,
    name: "GRT Textile Boutique",
    address: "18, Park Street, Kolkata - 700016",
    phone: "+91 98765 43212",
    hours: "11:00 AM - 8:00 PM (Mon-Sat), 12:00 PM - 6:00 PM (Sun)",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    region: "east",
    mapLink: "https://maps.google.com"
  },
  {
    id: 4,
    name: "GRT Textile Gallery",
    address: "7, Connaught Place, New Delhi - 110001",
    phone: "+91 98765 43213",
    hours: "10:00 AM - 9:00 PM (Mon-Sun)",
    image: "https://images.unsplash.com/photo-1555529902-5a3c355076c0?q=80&w=2574&auto=format&fit=crop",
    region: "north",
    mapLink: "https://maps.google.com"
  },
  {
    id: 5,
    name: "GRT Textile Design Studio",
    address: "25, FC Road, Pune - 411005",
    phone: "+91 98765 43214",
    hours: "11:00 AM - 8:00 PM (Mon-Sun)",
    image: "https://images.unsplash.com/photo-1555529902-5a3c355076c0?q=80&w=2574&auto=format&fit=crop",
    region: "west",
    mapLink: "https://maps.google.com"
  },
  {
    id: 6,
    name: "GRT Textile Heritage Store",
    address: "12, Jubilee Hills, Hyderabad - 500033",
    phone: "+91 98765 43215",
    hours: "10:30 AM - 8:30 PM (Mon-Sun)",
    image: "https://images.unsplash.com/photo-1551801841-ecad875a5142?q=80&w=2574&auto=format&fit=crop",
    region: "south",
    mapLink: "https://maps.google.com"
  }
];

const StoreCard = ({ store }: { store: typeof stores[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-grt-gold/10">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={store.image} 
          alt={store.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl mb-3">{store.name}</h3>
        <div className="space-y-3 mb-5">
          <div className="flex">
            <MapPin className="h-5 w-5 text-grt-maroon mr-3 flex-shrink-0" />
            <span className="text-gray-700">{store.address}</span>
          </div>
          <div className="flex">
            <Phone className="h-5 w-5 text-grt-maroon mr-3 flex-shrink-0" />
            <span className="text-gray-700">{store.phone}</span>
          </div>
          <div className="flex">
            <Clock className="h-5 w-5 text-grt-maroon mr-3 flex-shrink-0" />
            <span className="text-gray-700">{store.hours}</span>
          </div>
        </div>
        <Button 
          asChild
          variant="outline" 
          className="w-full border-grt-gold/50 text-grt-gold hover:bg-grt-gold/10 hover:border-grt-gold"
        >
          <a href={store.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <span>View on Map</span>
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

const Stores = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredStores = (region?: string) => {
    let filtered = stores;
    
    if (region && region !== "all") {
      filtered = filtered.filter(store => store.region === region);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(store => 
        store.name.toLowerCase().includes(query) || 
        store.address.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 bg-gradient-to-b from-grt-light to-white">
        <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="heading-xl mb-6">Store Locator</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Find a GRT Textile store near you and experience our collections in person.
          </p>
        </div>
      </section>
      
      {/* Search */}
      <section className="container max-w-2xl mx-auto px-6 -mt-12 mb-16 relative z-10">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-grt-gold/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search by city, area, or store name"
              className="pl-10 border-grt-gold/30 focus-visible:ring-grt-gold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      {/* Store Listing */}
      <section className="section-container">
        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Stores</TabsTrigger>
            <TabsTrigger value="north">North India</TabsTrigger>
            <TabsTrigger value="south">South India</TabsTrigger>
            <TabsTrigger value="east">East India</TabsTrigger>
            <TabsTrigger value="west">West India</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores().map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
            {filteredStores().length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No stores found matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="north">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores("north").map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
            {filteredStores("north").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No stores found in North India matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="south">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores("south").map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
            {filteredStores("south").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No stores found in South India matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="east">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores("east").map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
            {filteredStores("east").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No stores found in East India matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="west">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores("west").map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
            {filteredStores("west").length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No stores found in West India matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Store Experience */}
      <section className="bg-grt-light py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-lg">Visit Our Stores</h2>
              <p className="text-gray-700 leading-relaxed">
                Experience the richness of our textiles in person at any of our premium retail locations. Our knowledgeable staff will guide you through our collections and help you find the perfect pieces that complement your style.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-grt-gold/10 flex items-center justify-center text-grt-gold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-medium mb-1">Personal Styling</h3>
                    <p className="text-gray-600">Our expert stylists can provide personalized recommendations based on your preferences and needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-grt-gold/10 flex items-center justify-center text-grt-gold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-medium mb-1">Textile Knowledge</h3>
                    <p className="text-gray-600">Learn about the history, craftsmanship, and care for different textile traditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-grt-gold/10 flex items-center justify-center text-grt-gold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-medium mb-1">Exclusive Collections</h3>
                    <p className="text-gray-600">Some of our limited-edition pieces are only available in-store and not online.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551801841-ecad875a5142?q=80&w=2574&auto=format&fit=crop" 
                  alt="GRT Textile store interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop" 
                  alt="GRT Textile store display" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Stores;
