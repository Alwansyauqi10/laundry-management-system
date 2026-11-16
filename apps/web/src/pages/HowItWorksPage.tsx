import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  UserRoundPlus,
  Truck,
  ClipboardList,
  WashingMachine,
  Shirt,
  PackageCheck,
  CreditCard,
  MapPin,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: UserRoundPlus,
    title: "Create an Account & Book a Pickup",
    description:
      "Register, provide your pickup address, and schedule a laundry pickup.",
  },
  {
    icon: Truck,
    title: "Driver Collects Your Laundry",
    description:
      "A driver accepts your request, collects your laundry, and transports it to the assigned worker.",
  },
  {
    icon: ClipboardList,
    title: "Laundry Inspection",
    description:
      "The admin records the total weight and quantity of each clothing item before creating your order.",
  },
  {
    icon: WashingMachine,
    title: "Professional Laundry Processing",
    description:
      "Your clothes go through washing, ironing, and packing, with item quantities checked at every station.",
  },
  {
    icon: CreditCard,
    title: "Payment & Delivery",
    description:
      "Once processing is complete, an invoice is generated. After payment, your laundry is delivered to your doorstep.",
  },
];

const stations = [
  { icon: WashingMachine, name: "Washing" },
  { icon: Shirt, name: "Ironing" },
  { icon: PackageCheck, name: "Packing" },
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Introduction */}
      <section className="bg-gradient-to-r from-white to-[#EAF3FF] px-6 pb-16 pt-32 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#1557C0]">
          Simple Steps, Fresh Results
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#102B55] sm:text-5xl">
          How Laundrix Works
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          From scheduling a pickup to receiving freshly cleaned laundry,
          discover how easy it is to use Laundrix.
        </p>
      </section>

      {/* Customer Journey */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#102B55]">
            Your Laundry Journey
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#1557C0]">
                    <Icon size={27} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1557C0]">
                      STEP 0{index + 1}
                    </p>
                    <h3 className="mt-1 font-bold text-[#102B55]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processing Stations */}
      <section className="bg-[#F5F9FF] px-6 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#102B55]">
            Three Dedicated Processing Stations
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Each stage is handled by a dedicated worker who verifies clothing
            quantities before continuing the process.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {stations.map((station, index) => {
              const Icon = station.icon;

              return (
                <div
                  key={station.name}
                  className="rounded-2xl border border-blue-100 bg-white p-7"
                >
                  <Icon className="mx-auto text-[#1557C0]" size={36} />
                  <p className="mt-4 text-xs font-bold text-[#1557C0]">
                    STATION 0{index + 1}
                  </p>
                  <h3 className="mt-2 font-bold text-[#102B55]">
                    {station.name}
                  </h3>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-gray-500">
            If an item quantity does not match the previous station, the worker
            must request approval from the outlet admin before continuing.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-[#1557C0]">
            <MapPin size={32} />
          </div>
          <h2 className="text-3xl font-bold text-[#102B55]">
            Your Nearest Eligible
          </h2>
          <p className="max-w-2xl leading-8 text-gray-600">
            Laundrix uses your pickup location to identify an eligible nearby
            outlet within its service distance. Orders are assigned according to
            outlet availability and admin shifts.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="container mx-auto rounded-3xl bg-[#1557C0] px-6 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Create your Laundrix account and enjoy convenient laundry pickup and
            delivery.
          </p>
          <Button
            asChild
            className="mt-8 bg-white px-7 py-6 font-bold text-[#1557C0] hover:bg-blue-50"
          >
            <Link to="/register">
              Create Your Account
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HowItWorksPage;
