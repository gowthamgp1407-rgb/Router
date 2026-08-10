function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Message submitted successfully!");
  };

  return (
    <div className="page">

      <div className="page-header">
        <span className="badge">Contact Us</span>

        <h1>Get In Touch</h1>

        <p>
          We would love to hear from you.
        </p>
      </div>

      <div className="content-card">

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;