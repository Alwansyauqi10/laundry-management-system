import { Routes, Route } from "react-router-dom";

// Feature 1
import Home from "@/pages/feature 1/HomePage";
import ServicesPage from "@/pages/feature 1/ServicesPage";
import HowItWorksPage from "@/pages/feature 1/HowItWorksPage";
import FAQPage from "@/pages/feature 1/FAQPage";
import ReviewsPage from "@/pages/feature 1/ReviewsPage";
import RegisterPage from "@/pages/feature 1/RegisterPage";
import LoginPage from "@/pages/feature 1/LoginPage";
import VerifyEmailPage from "@/pages/feature 1/VerifyEmailPage";

// Feature 3
import DashboardLayout from "@/layouts/DashboardLayout";
import WorkersPage from "@/pages/feature 3/WorkersPage";
import AttendancePage from "@/pages/feature 3/AttendancePage";
import DriversPage from "@/pages/feature 3/DriversPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Feature 1 - Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Feature 3 - Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="workers" element={<WorkersPage />} />
        <Route path="attendance" element={<AttendancePage />} />
        <Route path="drivers" element={<DriversPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
