import { useState } from "react";
import ServiceCard from "./ServiceCard";
import services from "../data/servicesData";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Get only 6 most important services initially
  const importantServices = services.slice(0, 6);
  const allServices = showAll ? services : importantServices;
  
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Premium Services</h2>
        <p className="subtitle">
          Professional cooling solutions with guaranteed satisfaction and competitive pricing
        </p>
        
        <div className="services-grid">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {!showAll && services.length > 6 && (
          <div className="view-all-container">
            <button 
              className="view-all-btn"
              onClick={() => setShowAll(true)}
            >
              <span>View All {services.length} Services</span>
              <span>↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;