import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Easy-to-reach support team",
  "High-quality, in-house book printing",
  "Price transparency (no hidden fees)",
  "Quick printing in as fast as 3 days",
  "Printed in the U.S.A.",
  "100% ownership of rights",
];

const AboutSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#EBF5F5' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ backgroundColor: 'rgba(198, 83, 0, 0.1)' }}></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/carousel-home5.webp" 
                alt="BookBaby Publishing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-semibold text-lg" style={{ color: '#c65300' }}>Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6" style={{ color: '#212733' }}>
              We're your partner
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#212733' }}>
              When you work with BookBaby, you can expect help at every step of the journey. 
              There's a lot to learn, but you can rest assured that our team will take care of 
              everything and anything your book might need.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#212733' }}>
              Working with BookBaby is simple and worry-free. Our easy-to-reach support team, 
              high-quality in-house printing, and transparent pricing make publishing your book 
              an enjoyable experience from start to finish.
            </p>
            <button className="btn-gold">
              Book some time with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
