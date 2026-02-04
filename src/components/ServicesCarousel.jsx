import { useState, useEffect } from "react";
import services from "../data/servicesData";

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "1400px",
    margin: "2rem auto",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    height: "600px",
    fontFamily: "'Segoe UI', sans-serif",
  };

  const sliderStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const slideBaseStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transform: "scale(1.1)",
    transition: "opacity 1s ease, transform 1s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const slideActiveStyle = {
    opacity: 1,
    transform: "scale(1)",
    zIndex: 1,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.7)",
  };

  const contentStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "2rem",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    color: "#fff",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.8rem",
  };

  const headingStyle = {
    fontSize: "2.2rem",
    margin: 0,
    fontWeight: 700,
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    margin: 0,
  };

  const buttonStyle = {
    padding: "0.6rem 1.4rem",
    backgroundColor: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    textDecoration: "none",
    marginTop: "0.5rem",
  };

  const navButtonStyle = (position) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [position]: "20px",
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "1.5rem",
    cursor: "pointer",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s",
  });

  const indicatorStyle = (active) => ({
    width: "12px",
    height: "12px",
    margin: "0 6px",
    borderRadius: "50%",
    backgroundColor: active ? "#25D366" : "rgba(255,255,255,0.5)",
    border: "none",
    cursor: "pointer",
  });

  const discountBannerStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "#ff5e5e",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "600",
    zIndex: 4,
    fontSize: "1rem",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  };

  return (
    <div style={containerStyle}>
      {/* Hidden H1 for SEO */}
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: '0' }}>
        Best AC Repair and Cooling Services in Lahore - Chill Tech
      </h1>
      <div style={discountBannerStyle}>20% OFF First Service!</div>

      <div style={sliderStyle}>
        {services.map((service, index) => (
          <div
            key={service.id}
            style={{
              ...slideBaseStyle,
              ...(index === currentSlide ? slideActiveStyle : {}),
            }}
          >
            <img src={service.image} alt={service.imageAlt || service.title} style={imageStyle} />
            <div style={contentStyle}>
              <h2 style={headingStyle}>{service.title}</h2>
              <p style={paragraphStyle}>{service.shortDesc}</p>
              <a
                href={`/service/${service.id}`}
                style={buttonStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <button style={navButtonStyle("left")} onClick={prevSlide} aria-label="Previous slide">
        ◀
      </button>
      <button style={navButtonStyle("right")} onClick={nextSlide} aria-label="Next slide">
        ▶
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          zIndex: 5,
        }}
      >
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={indicatorStyle(index === currentSlide)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
