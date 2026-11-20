import { PackageCheck, Sparkles, Truck, UserRound } from "lucide-react";

const features = [
  {
    icon: PackageCheck,
    title: "Pickup at Home",
    description: "Pickup scheduled at your convenience",
  },
  {
    icon: Sparkles,
    title: "Professional Care",
    description: "Clean, fresh, and hygienic laundry",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Delivered straight to your doorstep",
  },
  {
    icon: UserRound,
    title: "Order Tracking",
    description: "Track your laundry in real time",
  },
];

function ServiceBenefits() {
  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="container mx-auto grid grid-cols-4 divide-x divide-gray-100 px-6 py-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex flex-col items-center px-4 py-2 text-center"
            >
              <Icon size={36} className="mb-4 text-[#1557C0]" strokeWidth={2} />

              <h3 className="font-bold text-gray-900">{feature.title}</h3>

              <p className="mt-2 text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceBenefits;
