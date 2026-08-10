import { Link, useLocation } from "react-router-dom";

function PageNotFound() {

  const location = useLocation();

  return (
    <div className="not-found">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <p>
        Requested URL: {location.pathname}
      </p>

      <Link
        to="/"
        className="button"
      >
        ← Back to Home
      </Link>

    </div>
  );
}

export default PageNotFound;