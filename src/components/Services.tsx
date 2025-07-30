import { Card } from "@/components/ui/card";
import { CheckCircle, BarChart3, UserCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <CheckCircle className="w-12 h-12 text-hunter-green" />,
      title: "State Exclusivity",
      subtitle: "Your state. Your clients. No internal bidding wars.",
      description: "We work with only one employment law firm per state, ensuring you never compete against our other clients for the same leads. Your investment stays protected, and your market share grows.",
      features: [
        "Exclusive territory protection",
        "No competing clients in your state",
        "Protected market share",
        "Focused campaign optimization"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-hunter-green" />,
      title: "Tailored Reporting",
      subtitle: "Custom dashboards built to keep you in control.",
      description: "Real-time insights into your campaign performance with custom dashboards designed specifically for employment law metrics. Track what matters most to your practice.",
      features: [
        "Real-time performance tracking",
        "Competitive analysis",
        "Custom ROI calculations",
        "AI integrations"
      ]
    },
    {
      icon: <UserCheck className="w-12 h-12 text-hunter-green" />,
      title: "Work With An Expert",
      subtitle: "Your account deserves experience—not trial and error.",
      description: "9+ years of Google Ads mastery focused exclusively on employment law. You get proven strategies, not experiments, with a track record of multi-six-figure case settlements.",
      features: [
        "9+ years of Google Ads expertise",
        "Employment law specialization",
        "Proven case settlement results",
        "Direct access to your strategist"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-soft-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-hunter-green mb-6">
            Why Choose
            <span className="italic text-accent block">LawAdPro</span>
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto font-inter leading-relaxed">
            We don't just run ads—we deliver strategic growth solutions designed specifically 
            for employment law firms who are serious about scaling their practice.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-background border-hunter-green/10 hover:border-hunter-green/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 w-20 h-20 bg-ivory rounded-full flex items-center justify-center group-hover:bg-hunter-green/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-playfair font-bold text-hunter-green mb-2">
                  {service.title}
                </h3>
                <p className="text-accent font-inter font-semibold">
                  {service.subtitle}
                </p>
              </div>

              <p className="text-dark-gray mb-6 font-inter leading-relaxed text-center">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center text-sm font-inter">
                    <CheckCircle className="w-4 h-4 text-hunter-green mr-3 flex-shrink-0" />
                    <span className="text-dark-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;