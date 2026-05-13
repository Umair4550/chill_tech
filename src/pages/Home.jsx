import ServicesCarousel from "../components/ServicesCarousel";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      {/* HERO / HOME SECTION */}
      <section id="home">
        {/* Banner Ad */}
        <div style={{ marginBottom: '30px' }}>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4894327526032532"
               crossorigin="anonymous"></script>
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-4894327526032532"
               data-ad-slot="7971448803"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script dangerouslySetInnerHTML={{
            __html: "(adsbygoogle = window.adsbygoogle || []).push({});"
          }} />
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4894327526032532"
             crossorigin="anonymous"></script>
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-4894327526032532"
             data-ad-slot="5786920003"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script dangerouslySetInnerHTML={{
          __html: "(adsbygoogle = window.adsbygoogle || []).push({});"
        }} />
      </div>

      {/* CONTACT SECTION */}
      <ContactSection />
    </>
  );
};

export default Home;