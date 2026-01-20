import { CheckCircle2 } from "lucide-react";

const benefits = [
  "100% ownership of your book and rights",
  "High royalties on every sale",
  "Global distribution network",
  "Expert guidance throughout",
  "Fast-paced publishing process",
  "Valuable reader feedback",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-secondary to-navy rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Choose Us?
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
                We provide authors with the opportunity to share their stories globally, 
                offering high royalties and creative control. Our fast-paced publishing 
                and distribution services include valuable reader feedback to help writers 
                enhance their skills and online profile.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-lg">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Your Partner in Publishing Success
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Ingram Publishing, we believe every story deserves to be told. Our team of 
              experienced publishing professionals is dedicated to helping authors navigate 
              the complex world of book publishing with ease and confidence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're a first-time author or a seasoned writer, we provide the 
              tools, resources, and expertise you need to bring your vision to life and 
              reach readers around the world.
            </p>
            <button className="btn-gold">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
