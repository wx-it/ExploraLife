import aboutUsImg from "/images/aboutus.jpg";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center gap-10">
      <h2 className="block md:hidden md:absolute top-0 text-center w-full md:my-12 font-[Montserrat] font-semibold text-2xl">
        About Us
      </h2>
      <img
        className="absolute w-full h-screen object-cover -z-10"
        src={aboutUsImg}
        alt=""
      />

      <div className=" flex flex-row-reverse">
        <div className="w-[100%] md:h-screen md:px-[60px] mx-5 md:m-0 py-12 px-5  bg-white flex-col justify-center gap-2.5 inline-flex md:w-[50%]">
          <h2 className="hidden md:block md:my-12 font-[Montserrat] font-semibold text-2xl">
            About Us
          </h2>

          <div className="text-black text-[16px] font-normal">
            ExploraLife is your ultimate destination for inspiration,
            exploration, and discovery. We believe in the power of knowledge,
            curiosity, and a sense of wonder that drives us to explore the world
            around us.
            <br />
            Our team of passionate writers and experts cover a wide range of
            topics, including lifestyle, travel, wellness, technology, culture,
            and more. We strive to provide engaging and informative content that
            sparks inspiration, broadens horizons, and encourages readers to
            embrace a life of wonder.
            <br />
            Join us on this exciting journey as we uncover hidden gems, share
            insights, and celebrate the beauty of life's experiences.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
