import featuredContent from "../data/featuredContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FeaturedContent = () => {
  const breakpoints = {
    375: {
      slidesPerView: 1,
      spaceBetween: 10, // Adjust the value here to add space between slides
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 100, // Adjust the value here to add space between slides
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 150, // Adjust the value here to add space between slides
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 200, // Adjust the value here to add space between slides
    },
  };

  return (
    //here
    <div className="font-[Montserrat] flex flex-col justify-center py-10 md:mt-10 ">
      <h2 className="text-sky-900 text-[24px] font-bold border-b border-orange-200 mx-10 mb-4 ">
        Featured Content
      </h2>

      <div className="flex justify-center items-center w-full my-4 px-10">
        <Swiper
         slidesPerView={1}
         spaceBetween={10}
         className="swiper-container"
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
      </div>
    </div>
  );
};

export default FeaturedContent;
//fix the images issue
// style the features card + responsivness
