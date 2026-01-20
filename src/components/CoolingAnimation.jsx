import { useEffect, useState } from "react";

const CoolingAnimation = () => {
  const [drops, setDrops] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!show && window.scrollY > 50) {
        setShow(true);

        // Stop the rain after 2 seconds
        setTimeout(() => {
          setShow(false);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  useEffect(() => {
    if (!show) return;

    const newDrops = [];
    const numberOfDrops = 30;

    for (let i = 0; i < numberOfDrops; i++) {
      const types = ["💧", "❄️", "🧊"];
      const type = types[Math.floor(Math.random() * types.length)];

      newDrops.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 0.5}s`, // start quickly
        duration: `${Math.random() * 1.5 + 1}s`, // fast fall
        size: `${Math.random() * 0.8 + 0.8}rem`,
        type,
        opacity: Math.random() * 0.4 + 0.2,
        speed: Math.random() * 0.5 + 0.8,
      });
    }

    setDrops(newDrops);

    // Clear drops after 2 seconds to stop the rain
    const cleanup = setTimeout(() => {
      setDrops([]);
    }, 2000);

    return () => clearTimeout(cleanup);
  }, [show]);

  if (!show && drops.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      {drops.map((drop) => (
        <div
          key={drop.id}
          style={{
            position: "absolute",
            top: "-30px",
            left: drop.left,
            fontSize: drop.size,
            color: "rgba(173,216,230,0.5)",
            opacity: drop.opacity,
            filter: "blur(0.5px)",
            animation: `fall ${drop.duration} linear`,
            animationDelay: drop.delay,
            animationTimingFunction: `cubic-bezier(0.1, ${drop.speed}, 0.9, 1)`,
          }}
        >
          {drop.type}
          <span
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1px",
              height: "50px",
              background:
                "linear-gradient(to bottom, rgba(173,216,230,0.3), rgba(173,216,230,0))",
            }}
          />
        </div>
      ))}

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-30px) translateX(0); opacity: 0; }
            5% { opacity: 0.4; }
            95% { opacity: 0.4; }
            100% { transform: translateY(100vh) translateX(10px); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default CoolingAnimation;
