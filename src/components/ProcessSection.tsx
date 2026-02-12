import { Link2, DollarSign, Timer, Share2 } from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Submit Your Manuscript",
    description: "Tell us about your project and submit your manuscript for review",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "Professional Services",
    description: "Work with our editing, design, and production teams",
  },
  {
    icon: Timer,
    step: "03",
    title: "Quality Printing",
    description: "High-quality in-house printing with fast 3-day turnaround",
  },
  {
    icon: Share2,
    step: "04",
    title: "Global Distribution",
    description: "Sell your book worldwide through retailers and our bookshop",
  },
];

const ProcessSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-semibold text-lg" style={{ color: '#C65300' }}>Simple Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4" style={{ color: '#212733' }}>
            How Does it Work?
          </h2>
          <p className="text-lg" style={{ color: '#212733' }}>
            Get your book published and distributed to readers worldwide
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div key={index} className="process-step group relative">
              {/* Step Number & Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#E3E1D4' }}>
                  <item.icon className="w-10 h-10" style={{ color: '#C65300' }} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md" style={{ backgroundColor: '#C65300', color: '#FFFFFF' }}>
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3" style={{ color: '#212733' }}>
                {item.title}
              </h3>
              <p style={{ color: '#212733' }}>
                {item.description}
              </p>

              {/* Connector Line handled via CSS (hidden on mobile) */}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-gold text-lg px-10">
            Start Your Publishing Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
