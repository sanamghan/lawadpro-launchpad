import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Calendar } from "lucide-react";

const CaseStudy = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-hunter-green" />,
      value: "340%",
      label: "Increase in Qualified Leads",
      description: "Within 6 months of campaign optimization"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-hunter-green" />,
      value: "$2.8M",
      label: "In Case Settlements",
      description: "Generated from our lead campaigns"
    },
    {
      icon: <Users className="w-8 h-8 text-hunter-green" />,
      value: "127",
      label: "New Clients Acquired",
      description: "High-value employment law cases"
    },
    {
      icon: <Calendar className="w-8 h-8 text-hunter-green" />,
      value: "6",
      label: "Month ROI Timeline",
      description: "From campaign launch to full optimization"
    }
  ];

  return (
    <section id="case-study" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-hunter-green/10 rounded-full mb-6">
            <span className="text-hunter-green font-inter font-semibold text-sm">Case Study</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-hunter-green mb-6">
            Regional Employment Law Firm
            <span className="italic text-accent block">Scales to Market Leader</span>
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto font-inter leading-relaxed">
            How a mid-sized employment law firm transformed their client acquisition 
            and became the dominant practice in their state.
          </p>
        </div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <Card className="p-6 bg-background border-hunter-green/20">
              <h3 className="text-xl font-playfair font-bold text-hunter-green mb-4">
                The Challenge
              </h3>
              <p className="text-dark-gray font-inter leading-relaxed">
                A well-established employment law firm was struggling to compete with larger practices. 
                Their previous marketing agency was generating low-quality leads at high costs, and they were 
                losing potential clients to competitors with better digital presence.
              </p>
            </Card>

            <Card className="p-6 bg-background border-hunter-green/20">
              <h3 className="text-xl font-playfair font-bold text-hunter-green mb-4">
                Our Solution
              </h3>
              <p className="text-dark-gray font-inter leading-relaxed">
                We implemented our state exclusivity model, rebuilt their Google Ads campaigns from the ground up, 
                and created custom landing pages optimized for employment law conversions. Our employment law-specific 
                keyword research and ad copy dramatically improved campaign performance.
              </p>
            </Card>

            <Card className="p-6 bg-hunter-green text-ivory">
              <h3 className="text-xl font-playfair font-bold mb-4">
                The Results
              </h3>
              <p className="font-inter leading-relaxed opacity-90">
                Within 6 months, they became the dominant employment law practice in their state, 
                with a 340% increase in qualified leads and over $2.8M in case settlements directly 
                attributable to our campaigns.
              </p>
            </Card>
          </div>

          {/* Right Column - Metrics */}
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <Card 
                key={index} 
                className="p-6 bg-background border-hunter-green/10 hover:border-hunter-green/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-ivory p-3 rounded-lg">
                    {metric.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-playfair font-bold text-hunter-green mb-1">
                      {metric.value}
                    </div>
                    <div className="text-lg font-inter font-semibold text-accent mb-2">
                      {metric.label}
                    </div>
                    <div className="text-sm text-dark-gray font-inter">
                      {metric.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-hunter-green to-accent p-8 rounded-2xl">
          <h3 className="text-2xl font-playfair font-bold text-ivory text-center mb-8">
            Your Success Timeline
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { month: "Month 1", title: "Campaign Setup", desc: "Account audit, keyword research, campaign build" },
              { month: "Month 2-3", title: "Optimization", desc: "A/B testing, bid adjustments, landing page optimization" },
              { month: "Month 4-5", title: "Scaling", desc: "Budget increases, expanded targeting, new campaign types" },
              { month: "Month 6+", title: "Domination", desc: "Market leadership, consistent high-value leads" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-ivory/20 p-4 rounded-lg mb-4">
                  <div className="text-ivory font-inter font-bold text-sm mb-2">
                    {phase.month}
                  </div>
                  <div className="text-ivory font-playfair font-semibold text-lg mb-2">
                    {phase.title}
                  </div>
                  <div className="text-ivory/80 font-inter text-sm">
                    {phase.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;