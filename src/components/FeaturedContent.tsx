import featuredContent from "../data/featuredContent";

const FeaturedContent = () => {
  return (
    <div className="font-[Montserrat] h-screen p-20 ">
      <h2 className="text-sky-900 text-[24px] font-bold">FeaturedContent</h2>

      <div className="flex justify-between items-center">
        <div>
            <img src={featuredContent[0].image} alt="" />
            <div>
                <h2> {featuredContent[0].title} </h2>
                <p> {featuredContent[0].description} </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
//fix the images issue
// style the features card + responsivness