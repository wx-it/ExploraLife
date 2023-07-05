

const Newsletter = () => {
  return (
    <div className="bg-gray-300 px-12 py-20 mt-6 ">
      <div className=" flex justify-evenly items-center flex-col w-full md:flex-row">
        <div>
          <h2 className="text-3xl font-[Montserrat] font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-md font-[Open Sans] font-light">
            Stay up to date with the latest articles, news, and updates from
            ExploraLife.
          </p>
        </div>
        <div className="flex justify-between gap-4 flex-col mt-4 md:m-0 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3  focus:outline-none "
          />
          <button className="bg-black text-white hover:text-black hover:bg-white hover:border hover:border-black px-6 py-3 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
