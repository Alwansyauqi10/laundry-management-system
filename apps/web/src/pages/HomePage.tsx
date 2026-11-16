import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import ServiceBenefits from "@/components/ServiceBenefits";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Jumbotron />

      <ServiceBenefits />

      <Footer />
    </div>
  );
}

export default Home;
