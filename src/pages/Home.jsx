import ServicesCarousel from "../components/ServicesCarousel";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection"; // Add this import

const Home = () => {
  return (
    <>
      {/* HERO / HOME SECTION */}
      <section id="home">
        <ServicesCarousel />
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <AboutSection />
      </section>

      {/* CONTACT SECTION */}
      <ContactSection /> {/* Add this line */}
    </>
  );
};

export default Home;