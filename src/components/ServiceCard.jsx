import { sendWhatsappBooking } from "../utils/whatsappHelper";

const ServiceCard = ({ service }) => {
  // Calculate original price if discount exists
  const calculateOriginalPrice = () => {
    if (service.discount) {
      const discountPercent = parseInt(service.discount) / 100;
      const currentPrice = parseInt(service.price);
      const originalPrice = Math.round(currentPrice / (1 - discountPercent));
      return originalPrice;
    }
    return null;
  };

  const originalPrice = calculateOriginalPrice();

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Method 1: Using window.location (most reliable)
    window.location.href = sendWhatsappBooking(service);

    // Method 2: Using <a> tag approach
    // const link = document.createElement('a');
    // link.href = sendWhatsappBooking(service);
    // link.target = '_blank';
    // link.rel = 'noopener noreferrer';
    // link.click();

    // Method 3: Using window.open with better compatibility
    // const newWindow = window.open(sendWhatsappBooking(service), '_blank', 'noopener,noreferrer');
    // if (newWindow) newWindow.opener = null;
  };

  // Alternative: Use a regular anchor tag
  const whatsappUrl = sendWhatsappBooking(service);

  return (
    <div className="service-card">
      {/* Card Header with Image */}
      <div className="card-header">
        <img src={service.image} alt={service.title} />

        {/* Badges Container */}
        <div className="badge-container">
          {service.discount && (
            <span className="discount-badge">{service.discount} OFF</span>
          )}
          {service.popular && (
            <span className="popular-badge">Popular</span>
          )}
        </div>

        {/* Tag Badge */}
        {service.tag && (
          <span className={`tag-badge ${service.tag.toLowerCase().replace(' ', '-')}`}>
            {service.tag}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Title and Rating */}
        <div className="card-title-section">
          <h3 className="service-title">{service.title}</h3>
        </div>

        {/* Description */}
        <p className="service-description">{service.shortDesc}</p>

        {/* Features */}
        <div className="features-container">
          <div className="features-grid">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Price and Actions */}
        <div className="card-footer">


          <div className="action-buttons">
            {/* OPTION 1: Direct anchor tag (most reliable) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              onClick={(e) => {
                // Optional: Add analytics or tracking here
                console.log('Booking service:', service.title);
              }}
            >
              <span>Book Now</span>
            </a>

            {/* OPTION 2: If you prefer button with onClick */}
            {/* <button 
              className="whatsapp-btn"
              onClick={handleWhatsAppBooking}
            >
              <span>Book Now</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;