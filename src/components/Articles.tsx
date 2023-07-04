import articlesData, {
  CategorizedArticles,
  Article,
} from "../data/articlesData";

import { BsArrowUpRight } from "react-icons/bs";

const Articles = () => {
  const {
    lifestyleArticles,
    travelArticles,
    wellnessArticles,
    technologyArticles,
    cultureArticles,
  }: CategorizedArticles = articlesData;

  const renderArticles = (articles: Article[]) => {
    return articles.map((article: Article) => (
      <div className=" bg-white" key={article.id}>
        <img className="object-cover" src={article.imageUrl} alt="" />
        <div className="pt-4">
          <h3 className="font-[Montserrat] font-semibold"> {article.title} </h3>
          <p className="font-[Open Sans] text-gray-600 mt-2 text-sm">
            {article.description}
          </p>
          <div className="flex gap-2 items-end mt-3 cursor-pointer">
            <p className="text-xs font-semibold font-[Montserrat]">
              Read Article
            </p>
            <BsArrowUpRight className='text-sm' />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 h-full">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Latest Articles
        </h2>
        <div className="flex flex-col justify-center gap-12 h-full">
          <div className="">
            <h2 className="text-sky-900 text-[24px] font-bold border-b border-gray-200 mb-6 py-1 ">
              Lifestyle
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
              {renderArticles(lifestyleArticles)}
            </div>
          </div>

          <div className="">
            <h2 className="text-sky-900 text-[24px] font-bold border-b border-gray-200 mb-6 py-1 ">
              Travel
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
              {renderArticles(travelArticles)}
            </div>
          </div>

          <div className="">
            <h2 className="text-sky-900 text-[24px] font-bold border-b border-gray-200 mb-6 py-1 ">
              Wellness
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
              {renderArticles(wellnessArticles)}
            </div>
          </div>

          <div className="">
            <h2 className="text-sky-900 text-[24px] font-bold border-b border-gray-200 mb-6 py-1 ">
              Technology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
              {renderArticles(technologyArticles)}
            </div>
          </div>

          <div className="">
            <h2 className="text-sky-900 text-[24px] font-bold border-b border-gray-200 mb-6 py-1 ">
              Culture
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
              {renderArticles(cultureArticles)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
