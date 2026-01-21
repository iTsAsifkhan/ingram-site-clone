import { Link2, DollarSign, Timer, Share2 } from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Create Your Links",
    description: "Choose the book you'd like to sell and create your links",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "Set Your Price",
    description: "Set the purchase price for your books",
  },
  {
    icon: Timer,
    step: "03",
    title: "Set Limitations",
    description: "Set limitations for purchases, such as how long you'd like your books to be on sale",
  },
  {
    icon: Share2,
    step: "04",
    title: "Share & Sell",
    description: "Share & sell your book!",
  },
];

const ProcessSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-lg">Simple Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            How Does it Work?
          </h2>
          <p className="text-muted-foreground text-lg">
            Get your book published in four simple steps
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <div key={index} className="process-step group relative">
              {/* Step Number & Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground shadow-md">
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
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
