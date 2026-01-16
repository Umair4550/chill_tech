const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
       <div className="brand-logo">
            <span className="logo-icon">❄️</span>
            <h2>Chill Tech</h2>
          </div>
       

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="/service/1">AC Installation</a></li>
              <li><a href="/service/2">AC Repair</a></li>
              <li><a href="/service/3">Gas Filling</a></li>
              <li><a href="/service/4">Refrigerator Repair</a></li>
              <li><a href="/service/5">Deep Freezer Repair</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">🏠 Home</a></li>
              <li><a href="/#services">⚙️ Services</a></li>
              <li><a href="/#contact">📞 Contact</a></li>
              <li><a href="/#testimonials">⭐ Testimonials</a></li>
              <li><a href="/#about">ℹ️ About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://wa.me/923038848221" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                💬 WhatsApp
              </a>
              <a href="tel:03038848221" className="social-link phone">
                📱 Call Now
              </a>
              <a href="mailto:abdulghaffar4562@gmail.com" className="social-link email">
                ✉️ Email
              </a>
            </div>
            
            <div className="payment-methods">
              <h4>We Accept:</h4>
              <div className="payment-icons">
                <span>💳</span>
                <span>🏦</span>
                <span>📱</span>
                <span>💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} <strong>Chill Tech</strong>. All Rights Reserved.</p>
            <div className="footer-links-bottom">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;