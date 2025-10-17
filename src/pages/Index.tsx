import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComplexInfo from "@/components/ComplexInfo";
import UnitTypes from "@/components/UnitTypes";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <UnitTypes />
      <ComplexInfo />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
