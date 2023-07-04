import articlesData, {
  CategorizedArticles,
  Article,
} from "../data/articlesData";

import { Route, Routes, Link, NavLink } from "react-router-dom";

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
            <BsArrowUpRight className="text-sm" />
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
          <div className="flex items-center justify-start gap-4 border-b border-gray-300 pb-3">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "text-black" : isActive ? "text-black" : ""
              }
            >
              <h2 className="text-[16px] font-semibold text-gray-600 ">
                Lifestyle
              </h2>
            </NavLink>
            <NavLink to={"/travel"}>
              <h2 className="text-[16px] font-semibold text-gray-600 ">
                Travel
              </h2>
            </NavLink>
            <NavLink to={"/wellness"}>
              <h2 className="text-[16px] font-semibold text-gray-600 ">
                Wellness
              </h2>
            </NavLink>
            <NavLink to={"/technology"}>
              <h2 className="text-[16px] font-semibold text-gray-600 ">
                Technology
              </h2>
            </NavLink>
            <NavLink to={"/culture"}>
              <h2 className="text-[16px] font-semibold text-gray-600 ">
                Culture
              </h2>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            <Routes>
              <Route path="/" element={renderArticles(lifestyleArticles)} />
              <Route path="/travel" element={renderArticles(travelArticles)} />
              <Route
                path="/wellness"
                element={renderArticles(wellnessArticles)}
              />
              <Route
                path="/technology"
                element={renderArticles(technologyArticles)}
              />
              <Route
                path="/culture"
                element={renderArticles(cultureArticles)}
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
