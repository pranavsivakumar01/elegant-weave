
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandStory from "@/components/home/BrandStory";
import Collections from "@/components/home/Collections";
import Testimonials from "@/components/home/Testimonials";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import AIStylist from "@/components/home/AIStylist";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BrandStory />
        <Collections />
        <Testimonials />
        <NewsletterCTA />
      </main>
      <Footer />
      <AIStylist />
    </div>
  );
};

export default Index;
