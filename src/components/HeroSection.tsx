import { Phone, MessageCircle } from "lucide-react";
import InquiryForm from "./InquiryForm";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-12 md:py-20 px-4 md:px-8" style={{ backgroundColor: '#F2F0E5' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <span className="inline-block font-semibold text-lg mb-4" style={{ color: '#c65300' }}>
              Self Publishing Made Easy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#212733' }}>
              Self publishing has never been easier
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl" style={{ color: '#212733' }}>
              From editing and design to printing, distribution, and marketing, our experts help you through every step of the process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#" className="btn-gold flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat with an Expert
              </a>
              <a 
                href="tel:18779616878" 
                className="btn-outline-white flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                1-877-961-6878
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t" style={{ borderColor: '#E3E1D4' }}>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#c65300' }}>200k+</div>
                <div className="text-sm" style={{ color: '#212733' }}>Authors Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#c65300' }}>100%</div>
                <div className="text-sm" style={{ color: '#212733' }}>Ownership Rights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#c65300' }}>24/7</div>
                <div className="text-sm" style={{ color: '#212733' }}>Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-fade-up delay-200">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
