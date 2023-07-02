import featuredContent from "../data/featuredContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
const FeaturedContent = () => {
  const breakpoints = {
    475: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <div className="font-[Montserrat] h-screen p-20 ">
      <h2 className="text-sky-900 text-[24px] font-bold">FeaturedContent</h2>

      <div className="flex justify-between items-center my-4">
        <Swiper
          spaceBetween={100}
          breakpoints={breakpoints}
          navigation={true}
          loop={true}
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
