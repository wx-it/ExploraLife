import featuredContent from "../data/featuredContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SwipeArticles = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    900: { slidesPerView: 3, spaceBetween: 80 },
    1024: {
      slidesPerView: 3,
      spaceBetween: 200,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  return (
    <Swiper
      className="swiper-container"
      breakpoints={breakpoints}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
    >
      {featuredContent.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative group w-80 h-96">
            <img
              className="filter brightness-50 group-hover:brightness-100 transition-all duration-300 w-80 h-96 cursor-pointer object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="absolute bottom-0 py-3 px-2 bg-black bg-opacity-0 group-hover:bg-opacity-50 w-full">
              <h2 className="text-white text-[16px] font-semibold">
                {item.title}
              </h2>
              <p className="text-white text-[13px] font-normal w-full">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeArticles;
