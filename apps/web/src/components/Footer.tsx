import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#102B55] text-white">
      <div className="container mx-auto grid grid-cols-3 gap-12 px-8 py-14">
        <div>
          <Link to="/" className="inline-block">
            <img
              src="/laundrix.png"
              alt="Laundrix"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <p className="max-w-sm text-sm leading-7 text-blue-100/70">
            Making laundry easier through convenient pickup, professional
            cleaning, and reliable delivery. Let Laundrix take care of your
            laundry needs.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-sm text-blue-100/70">
            <Link to="/" className="hover:text-white">
              Home
            </Link>

            <Link to="/services" className="hover:text-white">
              Our Services
            </Link>

            <Link to="/how-it-works" className="hover:text-white">
              How It Works
            </Link>

            <Link to="/reviews" className="hover:text-white">
              Our reviews
            </Link>

            <Link to="/faq" className="hover:text-white">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Get in Touch</h3>

          <div className="flex flex-col gap-4 text-sm text-blue-100/70">
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>support@laundrix.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+62 812 3456 7890</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex items-center justify-between px-8 py-6">
          <p className="text-xs text-blue-100/50">
            © {new Date().getFullYear()} Laundrix. All rights reserved.
          </p>

          <p className="text-xs text-blue-100/50">Laundry Made Easy.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
