import { useRef, useEffect } from "react";

const ContactSection = () => {
  const contactRef = useRef(null);

  // Scroll to contact when URL has #contact hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Check on initial load
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Get in touch with our expert team for all your cooling needs
        </p>
          {/* Contact Info Cards */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Our Location</h3>
                <p>Rehmanpura Colony Lahore, Pakistan</p>
                <p className="contact-subtext">Visit us for consultations</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Call Us Anytime</h3>
                <a href="tel:+923038848221" className="phone-link">0303 8848221</a>
                <p className="contact-subtext">24/7 Emergency Service</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <a href="mailto:abdulghaffar4562@gmail.com" className="email-link">abdulghaffar4562@gmail.com</a>
                <p className="contact-subtext">Response within 24 hours</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div className="contact-details">
                <h3>Working Hours</h3>
                <p>Monday - Sunday: 24/7</p>
                <p className="contact-subtext">Emergency service available</p>
              </div>
            </div>

        
          </div>
        </div>
    
    </section>
  );
};

export default ContactSection;