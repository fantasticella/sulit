function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="contact-inner">
        <h2>Start Your Project</h2>
        <p>
          Let’s create a soft, modern website for your business. I’ll reply
          within 24–48 hours with next steps.
        </p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("This is a demo. Hook this form up to email or Formspree.");
          }}
        >
          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Business type
              <input
                type="text"
                name="businessType"
                placeholder="Hair salon, cleaning, lashes, caregiving..."
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              What do you need?
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project, timeline, and any ideas you have."
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
