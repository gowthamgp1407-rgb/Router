import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="badge">Our Services</span>

        <h1>Services</h1>

        <p>
          Explore the services provided by our application.
        </p>
      </div>

      <div className="card-grid">

        <div className="card">
          <h2>💻 Web Development</h2>

          <p>
            Build modern and responsive websites using React.
          </p>

          <Link to="/contact" className="button">
            Contact Us
          </Link>
        </div>

        <div className="card">
          <h2>🎨 UI Design</h2>

          <p>
            Create clean and user-friendly interfaces.
          </p>

          <Link to="/contact" className="button">
            Contact Us
          </Link>
        </div>

        <div className="card">
          <h2>⚛️ React Development</h2>

          <p>
            Build reusable components and modern React applications.
          </p>

          <Link to="/contact" className="button">
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Services;