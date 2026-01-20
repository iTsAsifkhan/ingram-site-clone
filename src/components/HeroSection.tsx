import { Phone, MessageCircle } from "lucide-react";
import InquiryForm from "./InquiryForm";

const HeroSection = () => {
  return (
    <section className="hero-bg min-h-[90vh] flex items-center py-12 md:py-20 px-4 md:px-8">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-up">
            <span className="inline-block text-accent font-semibold text-lg mb-4">
              Become A Published Author
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Do You Have a Story to Tell?
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
              Don't worry; we have got all your book publishing needs covered! We provide
              comprehensive support and help you establish your reputation as a celebrated author on
              globally recognized book publishing platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-gold flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat With An Expert
              </button>
              <a 
                href="tel:833-366-6770" 
                className="btn-outline-white flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                833-366-6770
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Books Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">Ownership Rights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/80">Expert Support</div>
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
