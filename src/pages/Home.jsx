import ServicesCarousel from "../components/ServicesCarousel";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import GoogleAd from "../components/GoogleAd";

const Home = () => {
  return (
    <>
      {/* HERO / HOME SECTION */}
      <section id="home">
        <div style={{ marginBottom: '30px' }}>
          <GoogleAd adSlot="7971448803" />
        </div>
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

      {/* Ad before Contact */}
      <div style={{ margin: '30px 0' }}>
        <GoogleAd adSlot="5786920003" />
      </div>

      {/* CONTACT SECTION */}
      <ContactSection />
    </>
  );
};

export default Home;