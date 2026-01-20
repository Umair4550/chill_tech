import { useEffect, useState } from "react";
import whatsappLogo from "../assets/logo/whatsapp.png";

const FloatingWhatsapp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const phone = "923038848221";
  const message =
    "Hello! I'm interested in your cooling services. Can you please assist me?";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "45px",
        width: "60px",
        height: "60px",
       
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        zIndex: 1000,
        cursor: "pointer",
        animation: "float 3s ease-in-out infinite",
      }}
    >
      {/* Pulse Ring */}
      <span
        style={{
          position: "absolute",
          inset: "-10px",
          borderRadius: "50%",
          border: "2px solid rgba(37, 211, 102, 0.4)",
          animation: "pulse 2.2s infinite",
        }}
      />

      <img
        src={whatsappLogo}
        alt="WhatsApp"
        style={{
          width: "60px",
          height: "60px",
          zIndex: 2,
        }}
      />

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(0.85);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }

          @media (max-width: 768px) {
            a[aria-label="Chat with us on WhatsApp"] {
              width: 54px !important;
              height: 54px !important;
              bottom: 16px !important;
              right: 16px !important;
            }
          }
        `}
      </style>
    </a>
  );
};

export default FloatingWhatsapp;
