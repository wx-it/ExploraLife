const Newsletter = () => {
  return (
    <div className="bg-blue-600 py-8 px-4 sm:px-8 lg:px-16">
      <div className=" flex justify-between items-center flex-col w-full md:flex-row">
        <div>
          <h2 className="text-3xl font-[Montserrat] font-semibold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-md font-[Open Sans] font-light text-white mb-6">
            Stay up to date with the latest articles, news, and updates from
            ExploraLife.
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-64 sm:w-80 px-4 py-3 rounded-l-md focus:outline-none"
          />
          <button className="bg-white text-sky-blue-300 hover:text-white hover:bg-sky-blue-300 px-6 py-3 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
