import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import services from "../data/servicesData";
import { sendWhatsappBooking } from "../utils/whatsappHelper";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id == id);

  return (
    <section className="service-details">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>→</span>
        <Link to="/#services">Services</Link>
        <span>→</span>
        <span>{service.title}</span>
      </div>

      {/* Service Image */}
      <img src={service.image} alt={service.title} />
      
      {/* Service Title */}
      <h2>{service.title}</h2>
      
      {/* Price Section */}
      <div className="price-section">
        {service.discount && (
          <div className="discount-badge-large">{service.discount} OFF</div>
        )}
        <div className="final-price">{service.price}</div>
        {service.originalPrice && (
          <div className="original-price">Rs. {service.originalPrice}</div>
        )}
      </div>
      
      {/* Service Description */}
      <p>{service.fullDesc}</p>
      
      {/* Features List (Optional) */}
      {service.features && (
        <div className="service-features">
          <h3>What's Included</h3>
          <ul className="features-list">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Emergency Notice for Emergency Services */}
      {service.tag === 'Emergency' && (
        <div className="emergency-notice">
          <h3>⚡ 24/7 Emergency Service Available</h3>
          <p>Our team is available round the clock for urgent repairs</p>
        </div>
      )}
      
      {/* WhatsApp Booking Button */}
      <a
        className="book-now"
        href={sendWhatsappBooking(service)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Book Now on WhatsApp</span>
      </a>
      
      {/* Back Button */}
      <Link to="/#services" className="back-button">
        ← Back to Services
      </Link>
    </section>
  );
};

export default ServiceDetails;