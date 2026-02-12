import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white py-4 px-4 md:px-8 z-50 shadow-lg">
      <div className="container-custom flex items-center justify-between">
        {/* Mobile: Center Logo Only */}
        <div className="w-full flex justify-center md:hidden">
          <a href="/" className="flex items-center">
            <img src="/images/logo.svg" alt="BookBaby" className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop: Logo + Nav + Single CTA (Phone Button) */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/images/logo.svg" alt="BookBaby" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#services"
              className="hover:text-blue-600 transition-colors"
              style={{ color: "#212733" }}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="hover:text-blue-600 transition-colors"
              style={{ color: "#212733" }}
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="hover:text-blue-600 transition-colors"
              style={{ color: "#212733" }}
            >
              FAQ
            </a>
          </nav>

          {/* Single Button CTA (Phone) */}
          <a
            href="tel:18779616878"
            className="btn-gold relative inline-flex items-center gap-2 overflow-hidden
                       shadow-lg transition-all duration-300
                       hover:shadow-2xl hover:-translate-y-[1px]
                       focus:outline-none focus:ring-2 focus:ring-orange-400/60"
          >
            {/* Glowing animated border */}
            <span
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                boxShadow: "0 0 0 0 rgba(234,179,8,0.0)",
                animation: "ctaGlow 1.6s ease-in-out infinite",
              }}
            />

            <Phone className="w-5 h-5" />
            <span className="font-semibold">1-877-961-6878</span>
          </a>
        </div>
      </div>

      {/* Local keyframes (no config needed) */}
      <style>{`
        @keyframes ctaGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(234,179,8,0.0), 0 0 0 0 rgba(234,179,8,0.0);
          }
          50% {
            box-shadow: 0 0 0 3px rgba(234,179,8,0.35), 0 0 24px 6px rgba(234,179,8,0.25);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
