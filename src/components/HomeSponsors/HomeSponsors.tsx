import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSponsors.css";

// Gold Sponsor images
import goldSponsor1 from "../../assets/images/elitist.jpg";
import goldSponsor2 from "../../assets/images/visitint.jpg";
import goldSponsor3 from "../../assets/images/marsh.jpg";
import goldSponsor4 from "../../assets/images/bosker.jpg";

// Silver Sponsor images
import sponsor1 from "../../assets/images/rephaze.png";
import sponsor2 from "../../assets/images/studio25.png";
import sponsor3 from "../../assets/images/theboxinglab.png";
import sponsor7 from "../../assets/images/nimbus.png";

const HomeSponsors: React.FC = () => {
  // Create ref for the slider
  const sliderRef = useRef<Slider | null>(null);

  const sponsorData = [
    { id: 1, name: "Elitist", image: goldSponsor1, tier: "gold" },
    { id: 2, name: "VisiTint", image: goldSponsor2, tier: "gold" },
    { id: 3, name: "Marsh", image: goldSponsor3, tier: "gold" },
    { id: 4, name: "Bosker", image: goldSponsor4, tier: "gold" },
    { id: 5, name: "Re:Phaze", image: sponsor1, tier: "silver" },
    { id: 6, name: "Studio 25", image: sponsor2, tier: "silver" },
    { id: 7, name: "The Boxing Lab", image: sponsor3, tier: "silver" },
    { id: 8, name: "Nimbus Studios", image: sponsor7, tier: "silver" },
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
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
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
          arrows: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  // Pause slider on touch devices when they start interacting
  useEffect(() => {
    const handleTouchStart = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    };

    const handleTouchEnd = () => {
      if (sliderRef.current) {
        // Resume autoplay after a short delay
        setTimeout(() => {
          sliderRef.current?.slickPlay();
        }, 1000);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="home-sponsors-container">
      <div className="sponsors-title-container">
        <h2 className="sponsors-title2">Sponsors</h2>
      </div>

      <div className="sponsor-carousel">
        <Slider {...sponsorSettings} ref={sliderRef}>
          {sponsorData.map((sponsor) => (
            <div className="sponsor-slide" key={sponsor.id}>
              <div className={`sponsor-card ${sponsor.tier}`}>
                <div className="sponsor-image-wrapper">
                  <img
                    src={sponsor.image}
                    alt={`${sponsor.name} sponsor`}
                    loading="lazy"
                  />
                </div>
                <h3 className="sponsor-name">{sponsor.name}</h3>
              </div>
            </div>
          ))}
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
