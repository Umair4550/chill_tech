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
      <img src={service.image} alt={service.imageAlt || service.title} />

      {/* Service Title */}
      <h2>{service.title}</h2>

      {/* Service Description */}
      <p>{service.fullDesc}</p>

      {/* Features List (Optional) */}
      {service.features && (
        <ul className="features-list">

          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}

      {/* Emergency Notice for Emergency Services */}
      {service.tag === 'Emergency' && (
        <div className="emergency-notice">
          <h3>⚡ 24/7 Emergency Service Available</h3>
          <p>Our team is available round the clock for urgent repairs
            <br />
          </p>
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


    </section>
  );
};

export default ServiceDetails;