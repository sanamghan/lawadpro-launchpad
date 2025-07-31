import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hunter-green text-ivory">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Final CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Ready to Scale Your
            <span className="italic text-accent block">Employment Law Practice?</span>
          </h2>
          <p className="text-xl text-ivory/90 max-w-3xl mx-auto font-inter leading-relaxed mb-8">
            Join the employment law firms already dominating their markets with our proven Google Ads system. 
            State exclusivity means you never compete with our other clients.
          </p>
          
          <Card className="max-w-2xl mx-auto p-8 bg-ivory/10 backdrop-blur-sm border-ivory/20">
            <h3 className="text-2xl font-playfair font-bold text-ivory mb-6">
              Book Your Free Strategy Call
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-ivory/20 border border-ivory/30 rounded-lg text-ivory placeholder-ivory/70 focus:ring-2 focus:ring-ivory focus:border-ivory font-inter"
                />
                <input
                  type="text"
                  placeholder="Firm Name"
                  className="px-4 py-3 bg-ivory/20 border border-ivory/30 rounded-lg text-ivory placeholder-ivory/70 focus:ring-2 focus:ring-ivory focus:border-ivory font-inter"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-ivory/20 border border-ivory/30 rounded-lg text-ivory placeholder-ivory/70 focus:ring-2 focus:ring-ivory focus:border-ivory font-inter"
              />
              <select className="w-full px-4 py-3 bg-ivory/20 border border-ivory/30 rounded-lg text-ivory focus:ring-2 focus:ring-ivory focus:border-ivory font-inter">
                <option className="text-hunter-green">Monthly Ad Spend</option>
                <option className="text-hunter-green">No Current Spend</option>
                <option className="text-hunter-green">Up to $10K</option>
                <option className="text-hunter-green">Up to $50K</option>
                <option className="text-hunter-green">Up to $100K</option>
                <option className="text-hunter-green">$100K+</option>
              </select>
              <textarea
                placeholder="What can I help with?"
                rows={3}
                className="w-full px-4 py-3 bg-ivory/20 border border-ivory/30 rounded-lg text-ivory placeholder-ivory/70 focus:ring-2 focus:ring-ivory focus:border-ivory font-inter"
              />
              <Button variant="elegant" size="xl" className="w-full">
                Scale My Business
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-ivory/20">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-playfair font-bold">
              LawAdPro
            </div>
            <p className="text-ivory/80 font-inter">
              Expert Google Ads management exclusively for employment law firms. 
              State exclusivity, custom dashboards, and proven results.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-ivory/80 font-inter">hello@lawadpro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-ivory/80 font-inter">Nationwide Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-bold">Services</h4>
            <ul className="space-y-2 text-ivory/80 font-inter">
              <li>Google Ads Management</li>
              <li>Custom Dashboard Reporting</li>
              <li>Employment Law Marketing</li>
              <li>State Exclusivity Programs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/20 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-ivory/60 text-sm font-inter">
            <div>
              © 2024 LawAdPro. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;