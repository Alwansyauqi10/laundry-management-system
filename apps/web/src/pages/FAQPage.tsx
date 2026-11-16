import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

function FAQPage() {
  function FAQItem(question: string, answer: string) {
    return (
      <details className="group rounded-xl border border-gray-200 bg-white p-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#102B55]">
          {question}
          <span className="text-xl text-[#1557C0] group-open:rotate-45">+</span>
        </summary>
        <p className="mt-4 leading-relaxed text-gray-600">{answer}</p>
      </details>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-[#EAF3FF] px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#102B55] sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Have questions about our laundry service? Find your answers here.
        </p>
      </section>

      <main className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-4">
          {FAQItem(
            "How do I schedule a laundry pickup?",
            "Log in to your Laundrix account and submit a pickup request with your address. Our system will assign your request to an eligible nearby outlet.",
          )}

          {FAQItem(
            "How is the laundry price calculated?",
            "Our staff will weigh your laundry and record the items. The final price is calculated based on the weight and applicable service rates.",
          )}

          {FAQItem(
            "How long does the laundry process take?",
            "Processing time depends on your laundry quantity and the services required. You can check your order status through your Laundrix account.",
          )}

          {FAQItem(
            "Can I track my laundry order?",
            "Yes! You can track your order through your Laundrix account and see updates from pickup to delivery.",
          )}

          {FAQItem(
            "What if my clothes are damaged or missing?",
            "You can submit a complaint through your Laundrix account. Include your order details and describe the issue so our team can review it.",
          )}
        </div>

        <section className="mt-16 rounded-2xl bg-[#EAF3FF] px-6 py-10 text-center">
          <MessageCircle className="mx-auto h-8 w-8 text-[#1557C0]" />
          <h2 className="mt-3 text-xl font-bold text-[#102B55]">
            Still have questions?
          </h2>
          <p className="mt-2 text-gray-600">
            Contact our team and we'll be happy to help.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FAQPage;
