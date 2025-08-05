import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [formData, setFormData] = useState({
    name: "",
    firmName: "",
    email: "",
    adSpend: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xjkoayyg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          firmName: formData.firmName,
          email: formData.email,
          adSpend: formData.adSpend,
          message: formData.message,
          formSource: 'header'
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      toast({
        title: "Success!",
        description: "Your strategy call request has been submitted. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        name: "",
        firmName: "",
        email: "",
        adSpend: "",
        message: ""
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="py-2 md:py-8 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--hunter-green))_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--accent))_0%,_transparent_50%)]" />
      </div>
      
      {/* Professional Photo Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/040c0b43-559d-43a0-b305-3eba19a6613a.png"
          alt="Professional marketing expert"
          className="w-full h-full object-cover object-center scale-50 md:scale-100"
        />
      </div>

      <div className="container mx-auto px-6 py-2 md:py-8 relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-6 md:mb-16">
          <div className="text-2xl font-playfair font-bold text-hunter-green">
            LawAdPro
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-dark-gray hover:text-hunter-green transition-colors font-inter">
              Services
            </a>
            <a href="#case-study" className="text-dark-gray hover:text-hunter-green transition-colors font-inter">
              Case Study
            </a>
            <a href="#contact" className="text-dark-gray hover:text-hunter-green transition-colors font-inter">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-hunter-green leading-tight">
                Scale Your
                <span className="italic text-accent block">Employment Law</span>
                Practice
              </h1>
              <p className="text-xl text-dark-gray leading-relaxed font-inter">
                Expert Google Ads management exclusively for employment law firms. 
                <span className="font-semibold text-hunter-green"> State exclusivity</span>, 
                custom dashboards, and proven results that deliver 
                <span className="font-semibold text-hunter-green"> multi-six-figure settlements</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-hunter-green font-playfair">9+</div>
                <div className="text-sm text-dark-gray font-inter">Years Mastering Google Ads</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-hunter-green font-playfair">1000s</div>
                <div className="text-sm text-dark-gray font-inter">High-Value Leads Generated</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-hunter-green font-playfair">Multi-6</div>
                <div className="text-sm text-dark-gray font-inter">Figure Case Settlements</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-hunter-green font-playfair">Latest</div>
                <div className="text-sm text-dark-gray font-inter">Ad Enhancements</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative h-fit">
            {/* Contact Form */}
            <Card className="relative p-6 bg-background/85 backdrop-blur-sm border-hunter-green/20 shadow-lg">
              <h3 className="text-xl font-playfair font-bold text-hunter-green mb-4 text-center lg:text-left">
                Get Your Free Strategy Call
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-hunter-green/20 rounded-lg focus:ring-2 focus:ring-hunter-green focus:border-hunter-green font-inter"
                  />
                  <input
                    type="text"
                    name="firmName"
                    placeholder="Firm Name"
                    value={formData.firmName}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-hunter-green/20 rounded-lg focus:ring-2 focus:ring-hunter-green focus:border-hunter-green font-inter"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-hunter-green/20 rounded-lg focus:ring-2 focus:ring-hunter-green focus:border-hunter-green font-inter"
                />
                <select 
                  name="adSpend"
                  value={formData.adSpend}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-hunter-green/20 rounded-lg focus:ring-2 focus:ring-hunter-green focus:border-hunter-green font-inter"
                >
                  <option value="">Monthly Ad Spend</option>
                  <option value="No Current Spend">No Current Spend</option>
                  <option value="Up to $10K">Up to $10K</option>
                  <option value="Up to $50K">Up to $50K</option>
                  <option value="Up to $100K">Up to $100K</option>
                  <option value="$100K+">$100K+</option>
                </select>
                <textarea
                  name="message"
                  placeholder="What can I help with?"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-hunter-green/20 rounded-lg focus:ring-2 focus:ring-hunter-green focus:border-hunter-green font-inter"
                />
                <Button variant="cta" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Scale My Business"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;