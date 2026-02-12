import { BookOpen, Megaphone, TrendingUp, Workflow } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Book Printing",
    description: "High-quality, in-house book printing with fast turnaround. Print novels for as low as $4.95 a copy.",
  },
  {
    icon: Megaphone,
    title: "eBook Publishing",
    description: "Global reach to leading digital retailers including Amazon, Apple Books, Kobo, Barnes & Noble, and more.",
  },
  {
    icon: TrendingUp,
    title: "Audiobook Creation",
    description: "Professional audiobook production services to expand your book's reach to audio listeners.",
  },
  {
    icon: Workflow,
    title: "Book Design & Editing",
    description: "Professional cover design and editing services to ensure your book stands out and reads perfectly.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-semibold text-lg" style={{ color: '#c65300' }}>Unlock Your Potential</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4" style={{ color: '#212733' }}>
            Unlock your book's potential with our comprehensive services
          </h2>
          <p className="text-lg" style={{ color: '#212733' }}>
            Everything you need is all in one place
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group rounded-xl p-6 transition-all duration-300"
              style={{ 
                backgroundColor: '#E3E1D4',
                animationDelay: `${index * 0.1}s`,
                border: '1px solid #D5D2C5'
              }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#c65300' }}>
                <service.icon className="w-8 h-8 text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#212733' }}>
                {service.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#212733' }}>
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
