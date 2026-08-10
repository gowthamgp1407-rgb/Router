function About() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="badge">About Us</span>

        <h1>About Our Application</h1>

        <p>
          This project demonstrates React Router DOM concepts.
        </p>
      </div>

      <div className="content-card">
        <h2>About This Project</h2>

        <p>
          This application is created using React and React Router DOM.
          It demonstrates normal routing, navigation, nested routing,
          Outlet, and 404 page handling.
        </p>

        <p>
          Users can navigate between Home, About, Services, Contact,
          and Students without refreshing the browser.
        </p>
      </div>
    </div>
  );
}

export default About;