import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

function Jumbotron() {
  return (
    <div className="bg-gradient-to-r from-white via-[#F5F9FF] to-[#EAF3FF]">
      <div className="container mx-auto grid grid-cols-2 min-h-[460px] pt-24 px-8 gap-10">
        {/* Left */}
        <div className="flex flex-col justify-center gap-5">
          <div className="flex w-fit items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
            <Sparkles size={16} className="text-blue-600" />

            <p className="text-sm font-bold text-[#1557C0]">
              Your Trusted Online Laundry Partner
            </p>
          </div>

          <h1 className="font-inter text-6xl font-extrabold leading-tight text-[#102B55]">
            Laundry Made Easy.
          </h1>

          <p className="max-w-lg font-inter text-lg leading-8 text-gray-600">
            Enjoy hassle-free laundry services. Book from home, let us pick up
            your clothes, clean them professionally, and deliver them right back
            to your doorstep.
          </p>

          <div className="mt-3 flex gap-4">
            <Button
              asChild
              className="bg-[#1557C0] px-6 py-6 text-white hover:bg-[#1049A5]"
            >
              <Link to="/register">
                Book Laundry Now
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-gray-300 bg-white px-6 py-6 text-[#102B55] hover:bg-blue-50"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end">
          <img
            src="/laundry-png.jpg"
            alt="Freshly folded towels in a laundry basket"
            className="h-[400px] w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
