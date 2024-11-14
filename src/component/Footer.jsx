import React, { useState } from "react";
import footer1 from "../Image/footer/Desktop-Bannerpro_fit040624.webp";
import footer2 from "../Image/footer/Desktop-GIF.gif";
import footer3 from "../Image/footer/Desktop.gif";
import footer4 from "../Image/footer/SheildShadesWebBanner.webp";
import footer5 from "../Image/footer/WEBlkair_matte_essential.webp";
import footer6 from "../Image/footer/webharry_potter.webp";

function Footer() {
  const [activeIndex, setActiveIndex] = useState(0); // track the active index of the carousel

  const images = [
    footer1,
    footer2,
    footer3,
    footer5,
    footer6,
    footer4,
  ];

  // Function to handle slide changes
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            style={{width:"10px",height:"10px",}}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() => handleSlideChange((activeIndex - 1 + images.length) % images.length)} // Prev button logic
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button> */}
      {/* <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={() => handleSlideChange((activeIndex + 1) % images.length)} // Next button logic
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
}

export default Footer;
