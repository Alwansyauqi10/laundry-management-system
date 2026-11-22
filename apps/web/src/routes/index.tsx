import { Routes, Route } from "react-router-dom";
import Home from "@/pages/feature 1/HomePage";
import ServicesPage from "@/pages/feature 1/ServicesPage";
import HowItWorksPage from "@/pages/feature 1/HowItWorksPage";
import FAQPage from "@/pages/feature 1/FAQPage";
import ReviewsPage from "@/pages/feature 1/ReviewsPage";
import RegisterPage from "@/pages/feature 1/RegisterPage";
import LoginPage from "@/pages/feature 1/LoginPage";
import VerifyEmailPage from "@/pages/feature 1/VerifyEmailPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
