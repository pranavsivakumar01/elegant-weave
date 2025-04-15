
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, X } from "lucide-react";
import { cn } from "@/lib/utils";

const AIStylist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', text: string}>>([
    {
      type: 'bot',
      text: 'Hello! I\'m your AI Stylist assistant. How can I help you find the perfect outfit today?'
    }
  ]);
  const [input, setInput] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {type: 'user', text: input}]);
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const responses = [
        "I'd recommend our silk sarees with gold zari work for traditional weddings. They represent timeless elegance!",
        "For a modern office look, our cotton-silk fusion kurtas paired with palazzo pants would be perfect.",
        "Based on your preferences, you might love our pashmina shawls with traditional embroidery.",
        "Our latest collection includes contemporary silhouettes with traditional Kalamkari prints.",
        "For festive occasions, our Banarasi silk collection offers a perfect blend of heritage and modern aesthetics."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {type: 'bot', text: randomResponse}]);
    }, 1000);
    
    setInput('');
  };
  
  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-grt-maroon text-white p-4 rounded-full shadow-lg hover:bg-grt-maroon/90 transition-all z-50"
        aria-label="Open AI Stylist Chat"
      >
        <Bot className="h-6 w-6" />
      </button>
      
      {/* Chat Window */}
      <div className={cn(
        "fixed bottom-0 right-0 w-full sm:w-96 bg-white shadow-2xl rounded-t-xl z-50 transition-all duration-300 flex flex-col",
        isOpen ? "h-[500px]" : "h-0 opacity-0 pointer-events-none"
      )}>
        {/* Header */}
        <div className="bg-grt-gold text-grt-dark p-4 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-5 w-5 mr-2" />
            <h3 className="font-medium">AI Stylist Assistant</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-grt-dark/70 hover:text-grt-dark"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                message.type === 'user' 
                  ? "bg-grt-maroon/10 ml-auto rounded-br-none" 
                  : "bg-gray-100 mr-auto rounded-bl-none"
              )}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t p-3 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about outfit suggestions..."
            className="flex-1 focus-visible:ring-grt-gold"
          />
          <Button 
            type="submit" 
            size="icon"
            className="bg-grt-gold hover:bg-grt-gold/90 text-grt-dark"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default AIStylist;
