function Home() {
  return (
    <div className="page">
      <div className="hero">
        <span className="badge">React Router DOM</span>

        <h1>Welcome to Our React Application</h1>

        <p>
          This is a multi-page React application built using
          React Router DOM.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h2>🚀 Fast Navigation</h2>
          <p>
            Navigate between pages without refreshing the browser.
          </p>
        </div>

        <div className="card">
          <h2>🛣️ Routing</h2>
          <p>
            React Router DOM makes page navigation simple.
          </p>
        </div>

        <div className="card">
          <h2>📚 Students</h2>
          <p>
            Student pages demonstrate nested routing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;