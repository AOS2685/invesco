// import React, { useState, useEffect } from "react";
// import Ipo from "./Ipo";

// function Slideshow() {
//   const slides = [
//     {
//       images: [
//         {
//           src: "Ipo.png",
//           alt: "Ipo-img"
//           // className:
//         },
//         {
//           src: "PRE_IPO.png",
//           alt: "pre-ipo-img"
//         }
//       ]
//     }
//   ];
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   // Add your animation and transition logic here using React state and effects
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Logic to switch to the next slide
//       setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <slideshow>
//       <div className="slideshow">
//         {/* Render your slideshow content here */}
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${index === currentSlideIndex ? "active" : ""}`}
//           >
//             <div
//               className="slideBg"
//               style={{ backgroundImage: `url(${slide.imageUrl})` }}
//             >
//               <img
//                 src={slideBg.src}
//                 alt={slideBg.alt}
//                 // className={image.className}
//               />
//             </div>
//             <div className="slideContent">
//               <span>{slide.name}</span>
//               <a className="button" href={slide.profileUrl} target="/black">
//                 Unsplash Profile
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </slideshow>
//   );
// }

// export default Slideshow;

import React, { useState, useEffect } from "react";

function Slideshow() {
  const slides = [
    {
      images: [
        {
          src: "1.png",
          alt: "Ipo-img"
        },
        {
          src: "2.png",
          alt: "pre-ipo-img"
        }
      ]
    }
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //Showing Next Slide
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % slides[0].images.length
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="slideshow">
      {slides[0].images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlideIndex ? "active" : ""}`}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
