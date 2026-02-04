import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "var(--bg-color, #1a1a1a)",
            color: "var(--text-color, #ffffff)",
            fontFamily: "'Segoe UI', Roboto, sans-serif"
        }}>
            <h1 style={{ fontSize: "6rem", margin: "0", color: "#25D366" }}>404</h1>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Page Not Found</h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "500px", opacity: "0.8", marginBottom: "2rem" }}>
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                But don't worry, our cooling services are always available!
            </p>
            <Link
                to="/"
                style={{
                    padding: "0.8rem 2rem",
                    backgroundColor: "#25D366",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "30px",
                    fontWeight: "600",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 211, 102, 0.3)";
                }}
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
