import articlesData from "../data/articlesData";

const Articles = () => {
  const cultureArticles = articlesData.cultureArticles.map((article) => (
    <div className=" bg-white shadow-3xl p-4 " key={article.id}>
      <img className="object-cover" src={article.imageUrl} alt="" />
      <div className="pt-4">
        <h3 className="font-[Montserrat] font-semibold"> {article.title} </h3>
        <p className="font-[Open Sans] mt-2 text-sm"> {article.description} </p>
      </div>
    </div>
  ));

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 h-full">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Latest Articles
        </h2>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
            {cultureArticles}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
