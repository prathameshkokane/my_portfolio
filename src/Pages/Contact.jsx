import React from "react";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact">
      <h3>
        Contact Me <FiMail style={{ color: "#005746" }} />
      </h3>
      <div className="contactForm">
        <form action="https://formspree.io/f/xyyqkwwk" method="POST">
          <input type="text" name="username" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Message..."
            cols="25"
            rows="5"
            required
          ></textarea>
          {/* <input type="submit" value="send" /> */}
          <button type="submit">Send</button>
        </form>
        <div className="poster">
          <img src="/images/contact.png" className="vector-graphics" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
