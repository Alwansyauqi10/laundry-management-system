import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Truck,
  WashingMachine,
  PackageCheck,
  MapPin,
  CreditCard,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description:
      "Schedule a laundry pickup from your home. Our drivers will collect your laundry and deliver it back once the process is complete.",
  },
  {
    icon: WashingMachine,
    title: "Professional Laundry Processing",
    description:
      "Your laundry is handled through dedicated washing, ironing, and packing stations to ensure proper care throughout the process.",
  },
  {
    icon: PackageCheck,
    title: "Order Tracking",
    description:
      "Stay informed about your laundry with order status updates, from the initial pickup request until delivery.",
  },
  {
    icon: MapPin,
    title: "Nearby Outlet Assignment",
    description:
      "Your order is automatically directed to an eligible nearby outlet based on your registered location and outlet service coverage.",
  },
  {
    icon: CreditCard,
    title: "Online Payment",
    description:
      "Receive an invoice after your laundry has been weighed and its clothing items have been recorded by the outlet admin.",
  },
  {
    icon: MessageCircle,
    title: "Customer Complaints",
    description:
      "Submit a complaint if your laundry arrives damaged, incomplete, or different from what you expected.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-r from-white to-[#EAF3FF] px-6 pb-16 pt-32 sm:px-8">
        <div className="container mx-auto text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#1557C0]">
            What We Offer
          </p>

          <h1 className="text-4xl font-extrabold text-[#102B55] sm:text-5xl">
            Our Laundry Services
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Experience a more convenient way to manage your laundry. From
            doorstep pickup to professional cleaning and delivery, Laundrix
            takes care of everything.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#102B55]">
              Everything You Need
            </h2>

            <p className="mt-3 text-gray-500">
              Discover the convenient features available with Laundrix.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-blue-50 text-[#1557C0]">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-lg font-bold text-[#102B55]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8">
        <div className="container mx-auto rounded-3xl bg-[#1557C0] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Experience Easier Laundry?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">
            Create your Laundrix account and enjoy convenient laundry pickup,
            professional processing, and delivery.
          </p>

          <Button
            asChild
            className="mt-8 bg-white px-7 py-6 font-bold text-[#1557C0] hover:bg-blue-50"
          >
            <Link to="/register">
              Get Started
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;
