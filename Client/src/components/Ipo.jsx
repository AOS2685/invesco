import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Ipo() {
  const ipos = [
    {
      images: [
        {
          src: "image_3.png",
          altText: "Box-01",
          imageId: "two-image-align",
          className: "partial_img_in_box"
        }
      ],
      id: "box-1_access",
      topic: "SIGNIN",
      smallDesc: "New user\nSign up",
      buttonId: "btn-1_access"
    },
    {
      images: [
        {
          src: "Chart.png",
          altText: "Chart-img",
          imageId: "redchart",
          className: "img_in_box"
        }
      ],
      id: "box-2_access",
      topic: "Tax Calculator",
      smallDesc: "For salaried employee",
      buttonId: "btn-2_access"
    },
    {
      images: [
        {
          src: "Chart.png",
          altText: "Chart-img",
          imageId: "redchart",
          className: "img_in_box"
        }
      ],
      id: "box-2_access",
      topic: "Tax Calculator",
      smallDesc: "For salaried employee",
      buttonId: "btn-2_access"
    },
    {
      images: [
        {
          src: "Chart.png",
          altText: "Chart-img",
          imageId: "redchart",
          className: "img_in_box"
        }
      ],
      id: "box-2_access",
      topic: "Tax Calculator",
      smallDesc: "For salaried employee",
      buttonId: "btn-2_access"
    },
    {
      images: [
        {
          src: "Chart.png",
          altText: "Chart-img",
          imageId: "redchart",
          className: "img_in_box"
        }
      ],
      id: "box-2_access",
      topic: "Tax Calculator",
      smallDesc: "For salaried employee",
      buttonId: "btn-2_access"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <ipo>
      {/* <div className="carousel-container"> */}
      <div className="IPOS">
        <section className="ipos">
          {/* <Slider {...sliderSettings}> */}
          {ipos.map((ipo, index) => (
            <div className="ipo" id={ipo.id} key={index}>
              <div className="slideshow-container">
                {ipo.images.map((image, slideIndex) => (
                  <div className="image-container">
                    <img
                      src={image.src}
                      className={image.className}
                      alt={image.altText}
                      id={image.imageId}
                    />
                  </div>
                ))}
              </div>
              <br />
              <div className={`ipo-${index + 1}-topic`}>
                <span className="topic">{ipo.topic}</span>
                <br />
                <span className="small_desc">
                  <pre>{ipo.smallDesc}</pre>
                </span>
              </div>
              <button type="submit" id={ipo.buttonId}>
                Take me to Application
              </button>
            </div>
          ))}
          {/* </Slider> */}
        </section>
      </div>
    </ipo>
  );
}

export default Ipo;
