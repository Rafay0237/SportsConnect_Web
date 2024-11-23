import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const ImageSlider = ({ images }) => {
  return (
    <div className="relative max-h-80 mb-4 overflow-hidden rounded-lg ">
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: white; /* Default dot color */
            opacity: 0.7; /* Slightly transparent */
          }

          .swiper-pagination-bullet-active {
            background-color: white; /* Active dot color */
            opacity: 1; /* Fully opaque for active dot */
          }
        `}
      </style>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        cardsEffect={{
          perSlideRotate: 2,
          perSlideOffset: 8,
          slideShadows: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Match image ${index + 1}`}
              className="w-full h-48 sm:h-full max-h-80 max-w-xl object-cover rounded-lg mx-auto "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
