import articlesData, {
  CategorizedArticles,
  Article,
} from "../data/articlesData";

import { Route, Routes, NavLink } from "react-router-dom";

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
      <div
        className="bg-white pb-4 border-b border-gray-300 md:pb-0 md:border-none"
        key={article.id}
      >
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
    <section className="py-10 w-full">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Latest Articles
      </h2>
      <div className="mx-auto px-4 h-full">
        <div className="flex flex-col justify-center gap-12 h-full">
          <div className="flex items-center justify-start gap-4 border-b border-gray-300 pb-3 flex-wrap">
            <h2 className="text-[16px] font-semibold text-gray-600 ">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-600"
                    : isActive
                    ? "text-black md:border-b-2 pb-3 md:border-black"
                    : ""
                }
              >
                Lifestyle
              </NavLink>
            </h2>
            <h2 className="text-[16px] font-semibold text-gray-600 ">
              <NavLink
                to={"/travel"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-600"
                    : isActive
                    ? "text-black md:border-b-2 pb-3 md:border-black"
                    : ""
                }
              >
                Travel
              </NavLink>
            </h2>
            <h2 className="text-[16px] font-semibold text-gray-600 ">
              <NavLink
                to={"/wellness"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-600"
                    : isActive
                    ? "text-black md:border-b-2 pb-3 md:border-black"
                    : ""
                }
              >
                Wellness
              </NavLink>
            </h2>
            <h2 className="text-[16px] font-semibold text-gray-600 ">
              <NavLink
                to={"/technology"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-600"
                    : isActive
                    ? "text-black md:border-b-2 pb-3 md:border-black"
                    : ""
                }
              >
                Technology
              </NavLink>
            </h2>
            <h2 className="text-[16px] font-semibold text-gray-600 ">
              <NavLink
                to={"/culture"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-600"
                    : isActive
                    ? "text-black md:border-b-2 pb-3 md:border-black"
                    : ""
                }
              >
                Culture
              </NavLink>
            </h2>
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
