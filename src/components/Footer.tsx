import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800">
      {/* Top / Main Footer */}
      <div className="px-4 md:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          {/* 3-column row (like the screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Left: Company Info */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <img
                  src="/images/logo.svg"
                  alt="BookBaby"
                  className="h-12 w-auto"
                />
              </div>

              <p className="text-gray-700 leading-relaxed max-w-sm">
                We have writers, editors, designers, and publishing pros on board
                who can turn your manuscript into a book you'll be proud of.
              </p>
            </div>

            {/* Middle: Contact */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-xl mb-6" style={{ color: "#212733" }}>Contact</h4>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@bookbaby.com"
                    className="text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    info@bookbaby.com
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:18779616878"
                    className="text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    1-877-961-6878
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700 leading-relaxed">
                    <div>United States</div>
                    {/* If you want multi-line address like the screenshot, use lines like this:
                    <div>4111 US-80 Ste 406 - 261 Mesquite, TX 75150</div>
                    <div>United States</div>
                    */}
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: Payment Method */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-xl mb-6" style={{ color: "#212733" }}>
                Payment Method
              </h4>

              <div className="flex flex-wrap items-center gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-7 w-auto"
                  loading="lazy"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                  className="h-7 w-auto"
                  loading="lazy"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-7 w-auto"
                  loading="lazy"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                  alt="American Express"
                  className="h-7 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Disclaimer row (full width under the 3 columns) */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-gray-600 text-sm leading-relaxed max-w-6xl">
              <span className="font-bold">Disclaimer:</span> All company logos
              and trademarks appearing on our website are the property of their
              respective owners. We are not affiliated, associated, endorsed by,
              or in any way officially connected with these companies or their
              trademarks. The use of these logos and trademarks does not imply
              any endorsement, affiliation, or relationship between us and the
              respective companies. We solely use these logos and trademarks for
              identification purposes only. All information and content provided
              on our website is for informational purposes only and should not
              be construed as professional advice. We do not guarantee the
              accuracy or completeness of any information provided on our
              website. We are not responsible for any errors or omissions, or
              for the results obtained from the use of this information. Any
              reliance you place on such information is strictly at your own
              risk.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" py-4 px-4 md:px-8"style={{ backgroundColor: '#F2F0E5' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-black text-sm text-center">
            © {new Date().getFullYear()} BookBaby. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
