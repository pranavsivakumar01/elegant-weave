
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 bg-grt-light relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <h1 className="heading-xl">
                Our <span className="text-grt-maroon">Story</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Discover the heritage and craftsmanship behind GRT Textile, where tradition meets innovation.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1598300188553-7e5972a5362a?q=80&w=2574&auto=format&fit=crop" 
                  alt="GRT Textile heritage" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{
          maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,80 C250,120 350,0 500,100 C650,200 750,80 1000,100 L1000,100 L0,100 Z\' fill=\'%23fff\'/%3E%3C/svg%3E")',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,80 C250,120 350,0 500,100 C650,200 750,80 1000,100 L1000,100 L0,100 Z\' fill=\'%23fff\'/%3E%3C/svg%3E")',
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
        }}></div>
      </section>
      
      {/* Our History */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h2 className="heading-lg">Our History</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Founded in 1976 by Gopal Raj Thakur in Chennai, GRT Textile began as a small shop specializing in handwoven sarees. Driven by a passion for preserving traditional textile crafts, Gopal traveled across India to collaborate with skilled artisans and bring their creations to urban customers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the decades, GRT Textile expanded its offerings while staying true to its founding principles: quality craftsmanship, authentic designs, and ethical production. Today, led by the second generation, the brand has evolved into a premier textile house with a presence across South India.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While embracing modern techniques and contemporary designs, we continue to honor the traditional skills and knowledge passed down through generations of textile artisans.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=2574&auto=format&fit=crop" 
                alt="GRT Textile history" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=2670&auto=format&fit=crop" 
                alt="GRT Textile artisans" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-container bg-grt-light/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Our Values</h2>
          <p className="text-gray-700">
            At GRT Textile, our values are woven into every fabric we create and every interaction we have.
            These principles guide our decisions and shape our commitment to customers, artisans, and the environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Artisanal Excellence",
              description: "We celebrate and preserve traditional craftsmanship, working with skilled artisans to create textiles of exceptional quality."
            },
            {
              title: "Cultural Heritage",
              description: "We honor India's rich textile traditions while innovating to make them relevant for contemporary lifestyles."
            },
            {
              title: "Ethical Practices",
              description: "We ensure fair compensation for our artisans and adopt sustainable practices that minimize environmental impact."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-grt-gold/10">
              <div className="h-10 w-10 bg-grt-gold/10 rounded-full flex items-center justify-center mb-6 text-grt-gold font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-playfair mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Leadership Team</h2>
          <p className="text-gray-700">
            Meet the passionate individuals who continue the legacy of GRT Textile, 
            bringing together tradition, innovation, and a deep love for textiles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rajiv Thakur",
              position: "CEO & Creative Director",
              bio: "Son of founder Gopal Raj Thakur, Rajiv brings a modern vision while honoring the brand's heritage.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
            },
            {
              name: "Meera Patel",
              position: "Head of Design",
              bio: "With 15 years of experience in textile design, Meera leads our creative initiatives with passion and innovation.",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
            },
            {
              name: "Vikram Agarwal",
              position: "Operations Director",
              bio: "Vikram ensures our production processes maintain the highest standards while respecting traditional craftsmanship.",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-playfair mb-1">{member.name}</h3>
              <p className="text-grt-maroon mb-4">{member.position}</p>
              <p className="text-gray-600 max-w-xs mx-auto">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-grt-maroon text-white py-16">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-md mb-6">Experience the GRT Textile Difference</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Visit our stores to explore our collections and experience the quality and craftsmanship firsthand.
          </p>
          <Button asChild className="bg-grt-gold hover:bg-grt-gold/90 text-grt-dark">
            <a href="/stores">Find a Store Near You</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
