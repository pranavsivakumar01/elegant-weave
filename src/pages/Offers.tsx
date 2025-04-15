
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const currentOffers = [
  {
    id: 1,
    title: "Festival Season Special",
    discount: "25% OFF",
    description: "Celebrate this festive season with our exclusive collection of traditional wear.",
    validUntil: "November 30, 2025",
    image: "https://images.unsplash.com/photo-1617007765847-ef9fb13010e4?q=80&w=2574&auto=format&fit=crop",
    code: "FESTIVAL25"
  },
  {
    id: 2,
    title: "Wedding Collection",
    discount: "15% OFF",
    description: "Find the perfect outfit for the wedding season with our curated bridal collection.",
    validUntil: "December 15, 2025",
    image: "https://images.unsplash.com/photo-1610756394247-12c84fd59659?q=80&w=2574&auto=format&fit=crop",
    code: "WEDDING15"
  },
  {
    id: 3,
    title: "First Time Customer",
    discount: "10% OFF",
    description: "New to GRT Textile? Enjoy a special discount on your first purchase.",
    validUntil: "Ongoing",
    image: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=2574&auto=format&fit=crop",
    code: "WELCOME10"
  }
];

const upcomingOffers = [
  {
    id: 4,
    title: "Summer Collection Preview",
    discount: "Early Bird 20% OFF",
    description: "Be among the first to shop our upcoming summer collection with an exclusive preview discount.",
    comingSoon: "Available from June 1, 2025",
    image: "https://images.unsplash.com/photo-1602043705318-ca31e148de09?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Anniversary Sale",
    discount: "Up to 30% OFF",
    description: "Celebrating our 45th anniversary with special discounts across all collections.",
    comingSoon: "Coming in July 2025",
    image: "https://images.unsplash.com/photo-1617006894029-91ec5bec650d?q=80&w=2574&auto=format&fit=crop"
  }
];

const OfferCard = ({ offer, isCurrent = true }: { offer: typeof currentOffers[0] | typeof upcomingOffers[0], isCurrent?: boolean }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-grt-gold/10 hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-playfair text-xl">{offer.title}</h3>
          <span className="bg-grt-maroon text-white px-3 py-1 rounded-full text-sm font-medium">
            {offer.discount}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4">{offer.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-5">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>
            {isCurrent 
              ? `Valid until: ${(offer as typeof currentOffers[0]).validUntil}` 
              : (offer as typeof upcomingOffers[0]).comingSoon
            }
          </span>
        </div>
        
        {isCurrent ? (
          <div className="space-y-3">
            <div className="bg-grt-light p-3 rounded flex items-center justify-between">
              <span className="text-sm font-medium">Use code:</span>
              <span className="font-mono font-bold text-grt-maroon">{(offer as typeof currentOffers[0]).code}</span>
            </div>
            <Button className="w-full bg-grt-gold hover:bg-grt-gold/90 text-grt-dark">
              Shop Now
            </Button>
          </div>
        ) : (
          <Button variant="outline" className="w-full border-grt-gold text-grt-gold hover:bg-grt-gold/10">
            Notify Me
          </Button>
        )}
      </div>
    </div>
  );
};

const Offers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 bg-gradient-to-b from-grt-maroon to-grt-maroon/80 text-white">
        <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="heading-xl mb-6">
            Special Offers & Promotions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover exclusive deals and limited-time promotions on our premium textile collections.
          </p>
        </div>
      </section>
      
      {/* Current Offers */}
      <section className="section-container">
        <div className="mb-16">
          <h2 className="heading-lg mb-6 text-center">Current Offers</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Take advantage of these limited-time offers available now at all our stores and online.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="heading-lg mb-6 text-center">Coming Soon</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Preview our upcoming promotions and sign up to be notified when they go live.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} isCurrent={false} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Loyalty Program */}
      <section className="bg-grt-light py-20">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-grt-gold/20">
            <div className="text-center mb-8">
              <h2 className="heading-md mb-4">GRT Textile Loyalty Program</h2>
              <p className="text-gray-700">
                Join our loyalty program and enjoy exclusive benefits, personalized offers, and rewards with every purchase.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Earn Points",
                  description: "Get 1 point for every ₹100 spent. Redeem points for discounts on future purchases."
                },
                {
                  title: "Early Access",
                  description: "Be the first to shop new collections and seasonal sales with exclusive pre-access."
                },
                {
                  title: "Birthday Rewards",
                  description: "Receive a special gift and discount during your birthday month."
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-4">
                  <div className="h-12 w-12 bg-grt-gold/10 rounded-full flex items-center justify-center text-grt-gold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-medium mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="bg-grt-maroon hover:bg-grt-maroon/90 text-white">
                Join Now - It's Free
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms & Conditions */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-sm mb-6">Terms & Conditions</h2>
          <div className="text-sm text-gray-600 space-y-3">
            <p>• Offers cannot be combined with any other promotion or discount.</p>
            <p>• Discount codes must be applied at checkout to receive the offer.</p>
            <p>• Offers are valid on regular-priced items only, unless otherwise specified.</p>
            <p>• GRT Textile reserves the right to modify or cancel any promotion at any time.</p>
            <p>• For loyalty program, points expire one year from the date of issuance.</p>
            <p>• Please contact our customer service for any clarifications regarding offers.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Offers;
