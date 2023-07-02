import featuredContent from "../data/featuredContent";

const FeaturedContent = () => {
  return (
    <div className="font-[Montserrat] h-screen p-20 ">
      <h2 className="text-sky-900 text-[24px] font-bold">FeaturedContent</h2>

      <div className="flex justify-between items-center my-4">
      <div className="relative group">
  <img
    className="filter brightness-50 group-hover:brightness-100 transition-all duration-300 w-80 h-96 cursor-pointer"
    src={featuredContent[0].image}
    alt=""
  />
  <div className="absolute bottom-0 py-3 px-3 bg-black bg-opacity-0 group-hover:bg-opacity-50">
    <h2 className="text-white text-[16px] font-semibold">
      {featuredContent[0].title}
    </h2>
    <p className="text-white text-[13px] font-normal">
      {featuredContent[0].description}
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default FeaturedContent;
//fix the images issue
// style the features card + responsivness
