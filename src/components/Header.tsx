import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary py-4 px-4 md:px-8 sticky top-0 z-50 shadow-lg">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">IP</span>
          </div>
          <span className="text-primary-foreground font-bold text-xl hidden sm:block">
            Ingram Publishing
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-primary-foreground/90 hover:text-primary transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-primary-foreground/90 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-primary-foreground/90 hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        {/* Contact & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:833-366-6770" className="flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">833-366-6770</span>
          </a>
          <button className="btn-gold">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-secondary border-t border-primary/20 py-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a href="#services" className="text-primary-foreground/90 hover:text-primary py-2">
              Services
            </a>
            <a href="#how-it-works" className="text-primary-foreground/90 hover:text-primary py-2">
              How It Works
            </a>
            <a href="#faq" className="text-primary-foreground/90 hover:text-primary py-2">
              FAQ
            </a>
            <a href="tel:833-366-6770" className="flex items-center gap-2 text-primary-foreground py-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">833-366-6770</span>
            </a>
            <button className="btn-gold w-full mt-2">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
