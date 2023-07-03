import featuredContent from "../data/featuredContent";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
const FeaturedContent = () => {
  const breakpoints = {
    500: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 150,
    },
  };

  return (
    //here
    <div className="font-[Montserrat] flex flex-col justify-center py-10 px-5 md:p-20 ">
      <h2 className="text-sky-900 text-[24px] font-bold border-b border-orange-200 ">
        Featured Content
      </h2>

      <div className="flex justify-center items-center my-4">
        <Swiper
          breakpoints={breakpoints}
          loop={true}
          centeredSlides={true}
        >
          {featuredContent.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative group w-80 h-96">
                <img
                  className="filter brightness-50 group-hover:brightness-100 transition-all duration-300 w-80 h-96 cursor-pointer object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute bottom-0 py-3 px-3 bg-black bg-opacity-0 group-hover:bg-opacity-50">
                  <h2 className="text-white text-[16px] font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-white text-[13px] font-normal max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedContent;
//fix the images issue
// style the features card + responsivness
