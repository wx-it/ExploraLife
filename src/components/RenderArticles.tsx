import articlesData, {
  CategorizedArticles,
  Article,
} from "../data/articlesData";
import { BsArrowUpRight } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";

const RenderArticles = () => {
  const {
    lifestyleArticles,
    travelArticles,
    wellnessArticles,
    technologyArticles,
    cultureArticles,
  }: CategorizedArticles = articlesData;

  const renderArticles = (articles: Article[]) => {
    return articles.map((article: Article) => (
      <div
        id="latest"
        className="bg-white pb-4 border-b border-gray-300 md:pb-0 md:border-none"
        key={article.id}
      >
        <img
          className="object-cover w-full h-[250px]"
          src={article.imageUrl}
          alt=""
        />
        <div className="pt-4">
          <h3 className="font-[Montserrat] font-semibold"> {article.title} </h3>
          <p className="font-[Open Sans] text-gray-600 mt-2 text-sm">
            {article.description}
          </p>
          <div className="flex gap-2 items-end mt-3 cursor-pointer">
            <p className="text-xs font-semibold font-[Montserrat]">
              Read Article
            </p>
            <BsArrowUpRight className="text-sm" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Routes>
      <Route path="/" element={renderArticles(lifestyleArticles)} />
      <Route path="/travel" element={renderArticles(travelArticles)} />
      <Route path="/wellness" element={renderArticles(wellnessArticles)} />
      <Route path="/technology" element={renderArticles(technologyArticles)} />
      <Route path="/culture" element={renderArticles(cultureArticles)} />
    </Routes>
  );
};

export default RenderArticles;
