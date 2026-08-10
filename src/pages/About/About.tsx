import "./About.css";
import khaHeadphones from "../../assets/images/kha-about.jpg";
import khaBoxing from "../../assets/images/kha-about2.jpg";
import khaBoxing2 from "../../assets/images/kha-about3.jpg";
import rawAboutData from "./aboutData.json";
import { AboutData } from "./types";
import AboutSection from "./components/AboutSection";
import StatsList from "./components/StatsList";
import AccomplishmentsList from "./components/AccomplishmentsList";
import FormattedText from "../../components/FormattedText/FormattedText";

const aboutData = rawAboutData as AboutData;

const images: Record<string, string> = {
  khaHeadphones,
  khaBoxing,
  khaBoxing2,
};

const About = () => {
  const { biography, stats, accomplishments } = aboutData;

  return (
    <div className="about-page-container">
      <AboutSection
        title={biography.title}
        image={images[biography.image]}
        imageAlt={`Kha Lu ${biography.title}`}
      >
        <div className="biography-content">
          {biography.content.map((paragraph, index) => (
            <p key={index}>
              <FormattedText text={paragraph.text} />
            </p>
          ))}
        </div>
      </AboutSection>

      <AboutSection
        title={stats.title}
        image={images[stats.image]}
        imageAlt={`Kha Lu ${stats.title}`}
        altBackground
      >
        <StatsList stats={stats.items} />
      </AboutSection>

      <AboutSection
        title={accomplishments.title}
        image={images[accomplishments.image]}
        imageAlt={`Kha Lu ${accomplishments.title}`}
      >
        <AccomplishmentsList items={accomplishments.items} />
      </AboutSection>
    </div>
  );
};

export default About;
