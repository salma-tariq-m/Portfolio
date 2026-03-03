export default function Contact() {
  return (
    <section className="container" id="contact">
      <h2 className="mb-5 text-center">Let's Design Together</h2>
      <form action="" id="contactForm">
        <input
          type="email"
          placeholder="Enter your Email"
          id="email"
          className="form-control mb-3"
        />
        <textarea
          id="message"
          rows="3"
          placeholder="Write your message"
          className="form-control mb-3"
        ></textarea>
        <input
          type="submit"
          value="Contact me"
          className="btn btn-primary btnContact"
        />
      </form>
    </section>
  );
}