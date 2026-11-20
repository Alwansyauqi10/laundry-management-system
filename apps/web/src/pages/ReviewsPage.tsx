import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquareText } from "lucide-react";

function ReviewsPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#EAF3FF] px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#102B55] sm:text-4xl">
          Customer Reviews
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Your feedback helps us improve our laundry services. We'd love to hear
          about your experience with Laundrix.
        </p>
      </section>

      <main className="mx-auto min-h-[400px] max-w-5xl px-4 py-16">
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
          <MessageSquareText className="h-12 w-12 text-[#1557C0]" />
          <h2 className="mt-4 text-xl font-semibold text-[#102B55]">
            Customer Reviews
          </h2>
          <p className="mt-2 max-w-md text-gray-500">
            Customer reviews will be displayed here.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ReviewsPage;
