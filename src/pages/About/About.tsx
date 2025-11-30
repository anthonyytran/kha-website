import "./About.css";
import khaHeadphones from "../../assets/images/kha-about.jpg";
import khaBoxing from "../../assets/images/kha-about2.jpg";
import khaBoxing2 from "../../assets/images/kha-about3.jpg";
import aboutData from "./aboutData.json";

// Image mapping
const imageMap: { [key: string]: string } = {
  khaHeadphones,
  khaBoxing,
  khaBoxing2,
};

const About = () => {
  return (
    <div className="about-page-container">
      {/* Biography Section */}
      <section className="about-section">
        <div className="about-section-content">
          <div className="about-section-image">
            <img src={imageMap[aboutData.biography.image]} alt={`Kha Lu ${aboutData.biography.title}`} />
          </div>
          <div className="about-section-text">
            <h2 className="section-title">{aboutData.biography.title}</h2>
            <div className="biography-content">
              {aboutData.biography.content.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph.text }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section className="about-section about-alt-bg">
        <div className="about-section-content">
          <div className="about-section-image">
            <img src={imageMap[aboutData.stats.image]} alt={`Kha Lu ${aboutData.stats.title}`} />
          </div>
          <div className="about-section-text">
            <h2 className="section-title">{aboutData.stats.title}</h2>
            <div className="stats-container">
              <ul className="stats-list">
                {aboutData.stats.items.map((stat, index) => (
                  <li key={index}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="about-section">
        <div className="about-section-content">
          <div className="about-section-image">
            <img src={imageMap[aboutData.accomplishments.image]} alt={`Kha Lu ${aboutData.accomplishments.title}`} />
          </div>
          <div className="about-section-text">
            <h2 className="section-title">{aboutData.accomplishments.title}</h2>
            <ul className="accomplishments-list">
              {aboutData.accomplishments.items.map((accomplishment, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{ __html: accomplishment }}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
