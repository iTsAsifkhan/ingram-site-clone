import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">IP</span>
                </div>
                <span className="font-bold text-xl">Ingram Publishing</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Your trusted partner in self-publishing. We help authors bring their stories to life and reach readers worldwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary transition-colors">Services</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#faq" className="text-primary-foreground/80 hover:text-primary transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">About Us</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Editorial Services</a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Book Marketing</a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Cover Design</a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Distribution</a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary transition-colors">Rights Management</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:833-366-6770" className="text-primary-foreground/80 hover:text-primary transition-colors">
                      833-366-6770
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:info@ingrampublishing.com" className="text-primary-foreground/80 hover:text-primary transition-colors">
                      info@ingrampublishing.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-primary-foreground/80">
                    United States
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6 px-4 md:px-8">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ingram Publishing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
