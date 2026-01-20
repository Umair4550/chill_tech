import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/app-icon.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="brand">
            <img src={logo} alt="Chill Tech Logo" className="logo" />
            <div className="brand-text">
              <h2>Chill Tech</h2>
              <p className="tagline">Cool Solutions, Hot Service</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-center">
          <Link
            to="/"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>

          <button
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className={`nav-link ${activeSection === "services" ? "active" : ""}`}
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          <button
            className={`nav-link ${activeSection === "testimonials" ? "active" : ""}`}
            onClick={() => scrollToSection("testimonials")}
          >
            Testimonials
          </button>

          <button
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        <div className="nav-right">


          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link
              to="/"
              className={`mobile-nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </Link>

            <button
              className={`mobile-nav-link ${activeSection === "about" ? "active" : ""}`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              className={`mobile-nav-link ${activeSection === "services" ? "active" : ""}`}
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>

            <button
              className={`mobile-nav-link ${activeSection === "testimonials" ? "active" : ""}`}
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </button>

            <button
              className={`mobile-nav-link ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>

            <a href="tel:03038848221" className="mobile-nav-link call-btn">
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
