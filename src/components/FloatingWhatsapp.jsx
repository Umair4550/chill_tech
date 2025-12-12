import { useState, useEffect } from "react";

const FloatingWhatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const message = "Hello! I'm interested in your cooling services. Can you help me?";
    const phone = "923029855708";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <a
      href="https://wa.me/923029855708"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      onClick={handleClick}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease'
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <span role="img" aria-label="WhatsApp">💬</span>
    </a>
  );
};

export default FloatingWhatsapp;