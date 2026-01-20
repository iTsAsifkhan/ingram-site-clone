import { BookOpen, Megaphone, TrendingUp, Workflow } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Editorial Services Suite",
    description: "Take benefit from our complete suite of Editorial Services, which includes rights management, straightforward content adjustments, and book modification, ensuring you complete authority over your publication.",
  },
  {
    icon: Megaphone,
    title: "Strategic Book Promotion",
    description: "Our specialized book marketing services are designed to enhance your book's exposure and reach your target readers effectively.",
  },
  {
    icon: TrendingUp,
    title: "Increase Your Earnings",
    description: "Enhance your income with our strategies for revenue optimization designed to maximize your profits from book sales.",
  },
  {
    icon: Workflow,
    title: "Smooth Publish Flow",
    description: "Enjoy a hassle-free, efficient book publishing journey with our streamlined services—thoughtfully designed for authors, making the process easy and seamless.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-lg">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Build Your Audience with Our Publishing Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our services and products suite to choose your best fit book publishing option.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
