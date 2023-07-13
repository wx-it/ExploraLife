import SwipeArticles from "../components/SwipeArticles";

const FeaturedContent = () => {
 
  return (
    <div id="featured" className="font-[Montserrat] flex flex-col justify-center py-10 md:mt-10  ">
      <h2 className=" text-[24px] pb-3 text-center font-semibold border-b border-gray-200 mx-10 mb-6 ">
        Featured Content
      </h2>

      <div className="flex justify-center items-center w-full my-4 md:px-5">
       <SwipeArticles />
      </div>
    </div>
  );
};

export default FeaturedContent;
//fix the images issue
// style the features card + responsivness
