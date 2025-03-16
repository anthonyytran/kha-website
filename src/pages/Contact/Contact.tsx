import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import khaContact from "../../assets/images/kha-contact.jpg";
import { Instagram, X, CheckCircle } from "lucide-react";

const Contact = () => {
  const refForm = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Make sure the form reference exists
    if (!refForm.current) {
      alert("Form reference not found. Please try again.");
      return;
    }

    emailjs
      .sendForm(
        "service_44ciagc",
        "contact_form",
        refForm.current,
        "dLSkX7unlU8fSWDFm"
      )
      .then(
        () => {
          // Show success popup instead of alert
          setShowPopup(true);
          // Reset form
          refForm.current?.reset();
        },
        (error) => {
          console.error("Email error:", error);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact-page-container">
      {/* Success Popup */}
      {showPopup && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <button className="close-popup" onClick={closePopup}>
              <X size={24} />
            </button>
            <div className="success-icon">
              <CheckCircle size={60} />
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button className="popup-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}

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
            Khalu01@hotmail.com
          </a>
          <span className="or-divider">or</span>
          <a
            href="https://www.instagram.com/_khalu/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <Instagram size={20} />
            <span>Message me on Instagram</span>
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
          {/* Make sure the form has the correct name attributes for EmailJS */}
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
