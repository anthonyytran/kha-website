import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSponsors.css";

// Sponsor images
import sponsor1 from "../../assets/images/rephaze.png";
import sponsor2 from "../../assets/images/studio25.png";
import sponsor3 from "../../assets/images/theboxinglab.png";
import sponsor4 from "../../assets/images/dynamic-therapy.png";
import sponsor5 from "../../assets/images/greeneflicks.png";

const HomeSponsors: React.FC = () => {
  const sponsorSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-sponsors-container">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <div className="sponsor-carousel">
        <Slider {...sponsorSettings}>
          <div className="sponsor-slide">
            <img src={sponsor1} alt="Rephaze" />
          </div>
          <div className="sponsor-slide">
            <img src={sponsor2} alt="Sponsor 2" />
          </div>
          <div className="sponsor-slide">
            <img src={sponsor3} alt="The Boxing Lab" />
          </div>
          <div className="sponsor-slide">
            <img src={sponsor4} alt="Dynamic Therapy" />
          </div>
          <div className="sponsor-slide">
            <img src={sponsor5} alt="Greene Flicks" />
          </div>
        </Slider>
      </div>
      <div className="sponsor-button-container">
        <Link to="/sponsors" className="sponsor-button">
          View All
        </Link>
      </div>
    </div>
  );
};

export default HomeSponsors;
