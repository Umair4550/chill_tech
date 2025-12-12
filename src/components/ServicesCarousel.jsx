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
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="discount-banner">
        20% OFF First Service! 🎉
      </div>
      
      <div className="carousel-slider">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={service.image} alt={service.title} />
            <div className="carousel-content">
              <h2>{service.title}</h2>
              <p>{service.shortDesc}</p>
              <a 
                href={`/service/${service.id}`} 
                className="book-btn"
                style={{width: '200px', marginTop: '1rem'}}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-nav prev" onClick={prevSlide} aria-label="Previous slide">
        ◀
      </button>
      <button className="carousel-nav next" onClick={nextSlide} aria-label="Next slide">
        ▶
      </button>

      <div className="carousel-indicators">
        {services.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;