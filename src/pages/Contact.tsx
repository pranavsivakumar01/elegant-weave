
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  PhoneCall, 
  Mail, 
  Clock, 
  MapPin, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from "lucide-react";

const contactInfo = [
  {
    id: 1,
    icon: <PhoneCall className="h-6 w-6 text-grt-gold" />,
    title: "Phone",
    details: "+91 98765 43210",
    subtitle: "Mon-Sat, 9am-6pm"
  },
  {
    id: 2,
    icon: <Mail className="h-6 w-6 text-grt-gold" />,
    title: "Email",
    details: "info@grttextile.com",
    subtitle: "We respond within 24 hours"
  },
  {
    id: 3,
    icon: <Clock className="h-6 w-6 text-grt-gold" />,
    title: "Working Hours",
    details: "Monday to Saturday",
    subtitle: "9:00 AM - 6:00 PM"
  },
  {
    id: 4,
    icon: <MapPin className="h-6 w-6 text-grt-gold" />,
    title: "Corporate Office",
    details: "42-A, Fashion Street, Textile Hub",
    subtitle: "Chennai - 600001, Tamil Nadu, India"
  }
];

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 2,
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 3,
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    link: "#"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 md:pt-32 bg-grt-gold/10">
        <div className="container max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map(item => (
              <div key={item.id} className="bg-grt-light/30 p-6 rounded-lg border border-grt-gold/10 flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-grt-light rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-lg mb-2">{item.title}</h3>
                <p className="font-medium mb-1">{item.details}</p>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white shadow-lg rounded-lg p-8 border border-grt-gold/10">
                <h2 className="heading-md mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-grt-gold/20 focus-visible:ring-grt-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-grt-gold/20 focus-visible:ring-grt-gold"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="border-grt-gold/20 focus-visible:ring-grt-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="border-grt-gold/20 focus-visible:ring-grt-gold"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      required
                      rows={5}
                      className="border-grt-gold/20 focus-visible:ring-grt-gold resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-grt-maroon hover:bg-grt-maroon/90 text-white flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Map & Social Media */}
            <div className="space-y-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-grt-gold/10 h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167549696!2d80.0617808742898!3d13.047570288029807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1650018628671!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GRT Textile Location"
                ></iframe>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg p-8 border border-grt-gold/10">
                <h3 className="font-playfair text-xl mb-6">Connect With Us</h3>
                <p className="mb-6 text-gray-700">
                  Follow us on social media for the latest updates, collection previews, and fashion inspiration.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map(social => (
                    <a 
                      key={social.id} 
                      href={social.link} 
                      className="h-10 w-10 bg-grt-light rounded-full flex items-center justify-center hover:bg-grt-gold/20 transition-colors"
                      aria-label={social.name}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-12 md:py-24 bg-grt-light/30">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">
              Find answers to commonly asked questions about our products and services.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we offer international shipping to select countries. Shipping costs and delivery times vary based on the destination. Please check our shipping policy for more details."
              },
              {
                question: "What is your return policy?",
                answer: "We accept returns within 14 days of purchase for items in their original condition with tags attached. Custom-made items are non-returnable. Please visit our returns page for the complete policy."
              },
              {
                question: "How do I care for silk and handloom products?",
                answer: "We recommend dry cleaning for silk products. For handloom cotton, gentle hand washing with mild detergent is advised. Detailed care instructions are provided with each product."
              },
              {
                question: "Do you offer alterations for garments?",
                answer: "Yes, we offer alteration services for garments purchased from our stores. Basic alterations are complimentary, while more extensive modifications may incur a charge."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-grt-gold/10">
                <h3 className="font-playfair text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? Our customer service team is here to help.
            </p>
            <Button asChild className="bg-grt-maroon hover:bg-grt-maroon/90 text-white">
              <a href="mailto:support@grttextile.com">Email Customer Service</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
