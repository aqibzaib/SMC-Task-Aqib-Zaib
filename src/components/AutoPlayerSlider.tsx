import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://smbf.global/wp-content/uploads/2024/04/MVB.png",
  "https://smbf.global/wp-content/uploads/2024/04/MMA.png",
  "https://smbf.global/wp-content/uploads/2024/04/MI.png",
  "https://smbf.global/wp-content/uploads/2024/04/MIM.png",
];

const AutoPlaySlider: React.FC = () => {
  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <div className="flex items-center justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="padding-[10px] max-h-[94px] max-w-[250px]"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlaySlider;

// max-w-[250px] max-h-[94px] padding-[10px]
