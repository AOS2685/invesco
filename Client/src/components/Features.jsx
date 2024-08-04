import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Features() {
  const boxes = [
    {
      id: "box-1_access",
      topic: "SIGNIN",
      smallDesc: "New user\nSign up",
      images: [
        {
          src: "Sign_up.jpg",
          altText: "Box-01",
          imageId: "two-image-align",
          className: "partial_img_in_box",
        },
        {
          src: "Login.jpg",
          altText: "Box-02",
          imageId: "two-image-align",
          className: "partial_img_in_box",
        },
        {
          src: "Sign_in.jpg",
          altText: "Box-02",
          imageId: "two-image-align",
          className: "partial_img_in_box",
        },
      ],
      slideshowClass: "mySlides-0",
      dotClass: "dot-0",

      description: (
        <p className="description">
          <pre>Access exclusive unlisted share</pre>
          <pre>trading - Login or Sign up now!</pre>
        </p>
      ),
      buttonId: "btn-1_access",
      desc: <Link to="/signup">click here</Link>,
    },
    {
      id: "box-2_access",
      topic: "Buy/Sell",
      smallDesc: "Unlisted Shares",
      images: [
        {
          src: "B_S_stock.jpg",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "B_Y_2.png",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "B_S_3.jpg",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
      ],
      slideshowClass: "mySlides-1",
      dotClass: "dot-1",
      description: (
        <p className="description">
          <pre>Discover a marketplace to</pre>
          <pre>buy or sell, unlocking unique</pre>
          <pre>investment opportunities</pre>
        </p>
      ),
      buttonId: "btn-2_access",
      desc: <Link to="/dashboard">click here</Link>,
    },
    {
      id: "box-3_access",
      topic: "Calculator",
      smallDesc: "TAX,RD,FD",
      images: [
        {
          src: "TAX_01.jpg",
          altText: "Chart-img",
          // imageId: "redchart",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "TAX_02.png",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "TAX_03.png",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
      ],
      slideshowClass: "mySlides-2",
      dotClass: "dot-2",
      description: (
        <p className="description">
          <pre>Calculator Toolbox</pre>
          <pre>FD, RD, Tax</pre>
          {/* <pre>investment opportunities</pre> */}
        </p>
      ),
      buttonId: "btn-3_access",
      desc: <Link to="/signup">click here</Link>,
    },
    {
      id: "box-4_access",
      topic: "News",
      smallDesc: "Financial, Tech News",
      images: [
        {
          src: "News.png",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "New_02.jpg",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "New_02.jpg",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
      ],
      slideshowClass: "mySlides-3",
      dotClass: "dot-3",
      description: (
        <p className="description">
          <pre>Explore Latest: </pre>
          <pre>Tech & Finance News.</pre>
          {/* <pre>investment opportunities</pre> */}
        </p>
      ),
      buttonId: "btn-4_access",
      desc: <span>view more</span>,
    },
    {
      id: "box-5_access",
      topic: "Mutual Fund",
      smallDesc: "Fund on\nUnlisted Shares",
      images: [
        {
          src: "Mutual_Fund.png",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "Mutual_Fund.png",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
        {
          src: "Mutual_Fund.png",
          altText: "Chart-img",
          imageId: "two-image-align",
          className: "img_in_box",
        },
      ],
      slideshowClass: "mySlides-4",
      dotClass: "dot-4",
      description: (
        <p className="description">
          <pre>Coming Soon: </pre>
          <pre>Mutual Funds with</pre>
          <pre>Unlisted Stock Investment</pre>
        </p>
      ),
      buttonId: "btn-5_access",
      desc: <Link to="/signup">click here</Link>,
    },
  ];

  const slideIndexRefs = useRef(Array(boxes.length).fill(0));
  let intervalIds = [];

  useEffect(() => {
    const showSlides = (boxIndex) => {
      const slides = document.getElementsByClassName(`mySlides-${boxIndex}`);

      if (slides.length === 0) {
        return;
      }
      const dots = document.getElementsByClassName(`dot-${boxIndex}`);

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndexRefs.current[boxIndex]++;
      if (slideIndexRefs.current[boxIndex] > slides.length) {
        slideIndexRefs.current[boxIndex] = 1;
      }

      if (dots.length > 0) {
        for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");
        }
        const currentDotIndex =
          slideIndexRefs.current[boxIndex] > 0
            ? slideIndexRefs.current[boxIndex] - 1
            : 0;
        if (currentDotIndex >= 0 && currentDotIndex < dots.length) {
          dots[currentDotIndex].classList.add("active");
        }
      }
      slides[slideIndexRefs.current[boxIndex] - 1].style.display = "block";
    };

    const startSlideshow = (boxIndex) => {
      showSlides(boxIndex);
      intervalIds[boxIndex] = setInterval(() => showSlides(boxIndex), 2000);
    };

    for (let i = 0; i < boxes.length; i++) {
      startSlideshow(i);
    }

    return () => {
      for (let i = 0; i < intervalIds.length; i++) {
        clearInterval(intervalIds[i]);
      }
    };
  }, []);

  return (
    <features>
      <div className="carousel-container">
        <section className="boxes">
          {boxes.map((box, index) => (
            <div className="box" id={box.id} key={index}>
              <div className={`box-${index + 1}-topic`}>
                <span className="topic">{box.topic}</span>
                <br />
                <span className="small_desc">
                  <pre>{box.smallDesc}</pre>
                </span>
              </div>

              <div className="slideshow-container">
                {box.images.map((image, slideIndex) => (
                  <div
                    className={`mySlides fade ${box.slideshowClass}`}
                    key={slideIndex}
                  >
                    <div className="image-container">
                      <img
                        src={image.src}
                        className={image.className}
                        alt={image.altText}
                        id={image.imageId}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <div className="align">
                {[...Array(box.images.length)].map((_, dotIndex) => (
                  <div className={`dot ${box.dotClass}`} key={dotIndex}></div>
                ))}
              </div>
              <div id={`box${index + 1}-description`}>
                {/* <pre>{box.description}</pre> */}
                {box.description}
              </div>
              <button type="submit" id={box.buttonId}>
                {/* Click Here */}
                {box.desc}
              </button>
            </div>
          ))}
        </section>
      </div>
    </features>
  );
}

export default Features;
