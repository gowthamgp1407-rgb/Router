import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const isActive = (path) => {

    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };


  return (
    <nav className="navbar">

      <div className="nav-container">

        <Link
          to="/"
          className="logo"
        >
          ⚛️ ReactApp
        </Link>


        <div className="nav-links">

          <Link
            to="/"
            className={
              isActive("/")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>


          <Link
            to="/about"
            className={
              isActive("/about")
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>


          <Link
            to="/services"
            className={
              isActive("/services")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Services
          </Link>


          <Link
            to="/contact"
            className={
              isActive("/contact")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Link>


          <Link
            to="/students"
            className={
              isActive("/students")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Students
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;