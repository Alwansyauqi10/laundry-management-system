import { Link } from "react-router";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="sticky top-0 left-0 z-50 w-full border-b border-gray-100 bg-white text-[#102B55] shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/laundrix.png"
              alt="Laundrix"
              className="h-14 w-auto object-contain"
            />

            <span className="text-2xl font-extrabold text-[#102B55]">
              Laundrix
            </span>
          </Link>

          <div className="flex items-center gap-8 font-semibold text-sm">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>

            <Link to="/how-it-works" className="hover:text-blue-600">
              How It Works
            </Link>

            <Link to="/reviews" className="hover:text-blue-600">
              Reviews
            </Link>

            <Link to="/faq" className="hover:text-blue-600">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-gray-300 bg-white px-5 text-[#102B55] hover:bg-blue-50"
            >
              <Link to="/login">Log In</Link>
            </Button>

            <Button
              asChild
              className="bg-[#1557C0] px-5 text-white hover:bg-[#1049A5]"
            >
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
