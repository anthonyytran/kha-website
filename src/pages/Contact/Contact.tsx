import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import khaContact from "../../assets/images/kha-contact.jpg";
import { Instagram } from "lucide-react";

const Contact = () => {
  const refForm = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44ciagc",
        "contact_form",
        refForm.current!,
        "dLSkX7unlU8fSWDFm"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload();
        },
        () => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="contact-page-container">
      {/* Page Header */}
      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      {/* Sponsorship Section */}
      <div className="contact-details">
        <h2>Sponsorship Opportunities</h2>
        <p>For sponsorship opportunities, please contact me via:</p>
        <div className="contact-options">
          <a href="mailto:Khalu01@hotmail.com" className="email-link">
            <span>Email: </span> Khalu01@hotmail.com
          </a>
          <span className="or-divider">or</span>
          <a
            href="https://www.instagram.com/_khalu/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <Instagram size={20} />
            <span>Message me directly on Instagram</span>
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="contact-content">
        {/* Image Section */}
        <div className="contact-image">
          <img src={khaContact} alt="Kha Lu Boxing" />
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form ref={refForm} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
