import { ReactNode } from "react";

interface AboutSectionProps {
  title: string;
  image: string;
  imageAlt: string;
  altBackground?: boolean;
  children: ReactNode;
}

const AboutSection = ({
  title,
  image,
  imageAlt,
  altBackground,
  children,
}: AboutSectionProps) => (
  <section className={`about-section${altBackground ? " about-alt-bg" : ""}`}>
    <div className="about-section-content">
      <div className="about-section-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="about-section-text">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </div>
  </section>
);

export default AboutSection;
