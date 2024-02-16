import AboutSection from "../components/AboutSection";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ShowcaseSection from "../components/ShowcaseSection";
import WhyusSection from "../components/WhyusSection";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyusSection />
      <ShowcaseSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
