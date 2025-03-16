import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSponsors.css";

// Gold Sponsor images
import goldSponsor1 from "../../assets/images/elitist.jpg";
import goldSponsor2 from "../../assets/images/visitint.jpg";
import goldSponsor3 from "../../assets/images/marsh.jpg";

// Silver Sponsor images
import sponsor1 from "../../assets/images/rephaze.png";
import sponsor2 from "../../assets/images/studio25.png";
import sponsor3 from "../../assets/images/theboxinglab.png";
import sponsor4 from "../../assets/images/dynamic-therapy.png";
import sponsor5 from "../../assets/images/greeneflicks.png";
import sponsor6 from "../../assets/images/a1.jpg";
import sponsor7 from "../../assets/images/nimbus.png";

const HomeSponsors: React.FC = () => {
  const sponsorData = [
    { id: 1, name: "Elitist", image: goldSponsor1, tier: "gold" },
    { id: 2, name: "VisiTint", image: goldSponsor2, tier: "gold" },
    { id: 3, name: "Marsh", image: goldSponsor3, tier: "gold" },
    { id: 4, name: "Re:Phaze", image: sponsor1, tier: "silver" },
    { id: 5, name: "Studio 25", image: sponsor2, tier: "silver" },
    { id: 6, name: "The Boxing Lab", image: sponsor3, tier: "silver" },
    { id: 7, name: "Dynamic Therapy", image: sponsor4, tier: "silver" },
    { id: 8, name: "Greene Flicks", image: sponsor5, tier: "silver" },
    { id: 9, name: "A1 Performance", image: sponsor6, tier: "silver" },
    { id: 10, name: "Nimbus Studios", image: sponsor7, tier: "silver" },
  ];

  const sponsorSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
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
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="home-sponsors-container">
      <h2 className="sponsors-title2">Sponsors</h2>

      <div className="sponsor-carousel">
        <Slider {...sponsorSettings}>
          {sponsorData.map((sponsor) => (
            <div className="sponsor-slide" key={sponsor.id}>
              <div className={`sponsor-card ${sponsor.tier}`}>
                <div className="sponsor-image-wrapper">
                  <img src={sponsor.image} alt={sponsor.name} />
                </div>
                <h3 className="sponsor-name">{sponsor.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="sponsor-button-container">
        <Link to="/sponsors" className="sponsor-button">
          View All Sponsors
        </Link>
      </div>
    </div>
  );
};

export default HomeSponsors;
