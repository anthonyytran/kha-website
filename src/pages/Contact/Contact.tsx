import "./Contact.css";
import khaContact from "../../assets/images/kha-contact.jpg";
import { Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-page-container">
      {/* Page Header */}
      <div className="contact-header">
        <h1>Contact</h1>
        <p>
          For sponsorship enquiries, partnership proposals, media requests or
          event bookings, message me directly on Instagram or send an email.
        </p>
      </div>

      <div className="contact-single">
        <div className="contact-card sponsorship-card">
          <h2>Sponsorship</h2>
          <p className="card-subtext">
            Partnership decks and tier details available on request.
          </p>

          <div className="contact-rows">
            <a
              href="https://www.instagram.com/_khalu/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <span className="contact-row-icon">
                <Instagram size={20} />
              </span>
              <span className="contact-row-text">
                <span className="contact-row-label">Instagram</span>
                <span className="contact-row-value">@_khalu</span>
              </span>
            </a>

            <a href="mailto:Khalu01@hotmail.com" className="contact-row">
              <span className="contact-row-icon">
                <Mail size={20} />
              </span>
              <span className="contact-row-text">
                <span className="contact-row-label">Email</span>
                <span className="contact-row-value">Khalu01@hotmail.com</span>
              </span>
            </a>
          </div>

          <p className="location-note">Based in Melbourne, Australia.</p>

          <div className="contact-image">
            <img src={khaContact} alt="Kha Lu Boxing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
