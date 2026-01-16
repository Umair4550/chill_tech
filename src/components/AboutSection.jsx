const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <h2 className="about-title">About Us</h2>

         <p className="about-text">
          At <strong>Chill Tech</strong>, we specialize in delivering reliable, 
          energy-efficient, and cost-effective HVAC and cooling solutions for 
          homes, offices, and commercial environments. 
          <br /><br />
          With years of hands-on expertise, we’ve proudly served some of 
          Pakistan’s most trusted names — ensuring precision, safety, and 
          long-term performance in every project.
        </p>

        {/* Stats Row */}
        <div className="about-stats-row">
          <div className="stat-card">
            <h3>20+ Years</h3>
            <p>Industry Experience</p>
          </div>

          <div className="stat-card">
            <h3>5000+</h3>
            <p>Successful Installations</p>
          </div>

          <div className="stat-card">
            <h3>100% Quality</h3>
            <p>Guaranteed Service</p>
          </div>
        </div>

       

        {/* Trusted Clients Row */}
        <h3 className="trusted-title">Trusted Industry Clients</h3>

        <div className="trusted-row">
          <div className="trusted-item">🏦 Leading Banks & Financial Institutions</div>
<div className="trusted-item">🏛 Government & Public Sector Departments</div>
<div className="trusted-item">🏢 Top IT & Software Houses</div>
<div className="trusted-item">📱 Telecom & Digital Service Providers</div>
<div className="trusted-item">🛒 E-Commerce & Retail Businesses</div>
<div className="trusted-item">🏥 Healthcare & Medical Centers</div>
<div className="trusted-item">🚗 Transport, Logistics & Automotive Firms</div>
<div className="trusted-item">💼 SMEs, Startups & Corporate Clients</div>
        </div>

        <p className="about-bottom">
          Our mission is simple — <strong>Deliver cooling solutions that last</strong>. 
          Whether it’s installation, repair, or annual maintenance, Chill Tech 
          ensures expert service with every visit.
        </p>



      </div>
    </section>
  );
};

export default AboutSection;
