import { useEffect, useState } from "react";

const CoolingAnimation = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const newDrops = [];
    const numberOfDrops = 30; // More drops = heavier rain
    
    for (let i = 0; i < numberOfDrops; i++) {
      // Random type: water drop, snowflake, or ice
      const types = ['💧', '❄️', '🧊'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      newDrops.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${Math.random() * 3 + 2}s`, // Fast falling (2-5 seconds)
        size: `${Math.random() * 0.8 + 0.8}rem`,
        type: type,
        opacity: Math.random() * 0.4 + 0.2, // Lower opacity for rain effect
        speed: Math.random() * 0.5 + 0.8, // Speed multiplier
      });
    }
    
    setDrops(newDrops);
  }, []);

  return (
    <div className="rain-container">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: `${drop.duration}`,
            fontSize: drop.size,
            opacity: drop.opacity,
            animationTimingFunction: `cubic-bezier(0.1, ${drop.speed}, 0.9, 1)`,
          }}
        >
          {drop.type}
        </div>
      ))}
    </div>
  );
};

export default CoolingAnimation;