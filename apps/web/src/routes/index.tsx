import { Routes, Route } from "react-router-dom";
import Home from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import FAQPage from "@/pages/FAQPage";
import ReviewsPage from "@/pages/ReviewsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/faq" element={<FAQPage />} />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
