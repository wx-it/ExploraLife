import background from "../assets/images/background.jpg";

const Header = () => {
  return (
    <div className="flex flex-col h-screen font-[Montserrat] ">
      <img
        className="absolute w-full h-full object-cover filter brightness-75 -z-10"
        src={background}
        alt=""
      />
      <nav className="w-full px-12 py-5 justify-between items-center inline-flex">
        <a href="/" className="text-white text-[36px] font-semibold">
          ExploraLife
        </a>
        <ul className="flex gap-5">
          <li>
            <a className="text-white text-[16px] font-normal" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="/lifestyle">
              Lifestyle
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="/travel">
              Travel
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="/wellness">
              Wellness
            </a>
          </li>
          <li>
            <a
              className="text-white text-[16px] font-normal"
              href="/technology"
            >
              Technology
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="/culture">
              Culture
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <button className="px-[25px] py-[13px] bg-sky-900 bg-opacity-70 rounded justify-start items-start gap-2.5 flex ">
          <div className="text-white text-[13px] font-[Open Sans] font-semibold">Newsletter</div>
        </button>
      </nav>

      <div className="flex-col justify-center items-center gap-[11px] inline-flex h-full">
        <h1 className="text-white text-[32px] font-semibold">
          Discover, Inspire, Explore: Your Gateway to a Life of Wonder
        </h1>
        <p className="text-white text-[16px] font-medium">
          Embark on a Journey of Discovery and Inspiration
        </p>
      </div>
    </div>
  );
};

export default Header;
