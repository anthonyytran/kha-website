import { Link } from "react-router-dom";
import "./Contact.css";
import khaContact from "../../assets/images/kha-contact.jpg";
import { Instagram, Mail, Shirt, Megaphone } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-page-container">
      {/* Page Header */}
      <div className="contact-header">
        <p className="contact-eyebrow">Partnerships &amp; Enquiries</p>
        <h1>Contact</h1>
        <p className="contact-subtitle">
          For sponsorship enquiries, partnership proposals, media requests or
          event bookings, message me directly on Instagram or send an email.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-photo">
          <img src={khaContact} alt="Kha Lu Boxing" />
          <div className="contact-photo-caption">
            <span className="contact-photo-name">Kha Lu</span>
            <span className="contact-photo-role">
              Professional Boxer — Melbourne, Australia
            </span>
          </div>
        </div>

        <div className="contact-card get-in-touch-card">
          <h2>Get In Touch</h2>
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
        </div>
      </div>

      {/* What Partners Receive */}
      <div className="partners-section">
        <div className="partners-heading">
          <span className="heading-line" />
          <h2>What Partners Receive</h2>
          <span className="heading-line" />
        </div>

        <div className="partners-grid">
          <div className="partner-card">
            <span className="partner-card-icon">
              <Shirt size={22} />
            </span>
            <h3>Fight Night Branding</h3>
            <p>
              Your logo on fight shorts, walkout gear and corner apparel,
              seen live and on broadcast.
            </p>
          </div>

          <div className="partner-card">
            <span className="partner-card-icon">
              <Megaphone size={22} />
            </span>
            <h3>Social &amp; Content</h3>
            <p>
              Dedicated posts, training footage and fight-week coverage
              across my channels.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="next-fight-banner">
        <div className="next-fight-text">
          <h2>Back The Next Fight</h2>
          <p>
            Fifteen businesses already ride with the team. See who they are,
            then get in touch to talk about joining them.
          </p>
        </div>
        <div className="next-fight-actions">
          <Link to="/sponsors" className="view-sponsors-button">
            View Sponsors
          </Link>
          <a
            href="https://www.instagram.com/_khalu/"
            target="_blank"
            rel="noopener noreferrer"
            className="message-me-button"
          >
            <Instagram size={18} />
            <span>Message Me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
