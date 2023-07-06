import background from "/images/background-2.jpg";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex flex-col h-screen font-[Montserrat] scroll-start ">
      <img
        className="absolute w-full h-full object-cover filter brightness-75 -z-10"
        src={background}
        alt=""
      />
      <nav className="w-full px-5 py-5 justify-between items-center flex md:px-12 md:py-5">
        <div className=" md:hidden flex items-center justify-between w-full ">
          <a
            href="/"
            className=" text-white text-[26px] font-semibold md:text-[36px]"
          >
            ExploraLife
          </a>

          <button
            className="md:hidden text-3xl text-white cursor-pointer"
            onClick={handleToggleMenu}
          >
            <FiMenu />
          </button>
        </div>

        {isOpen && (
          <div
            className={`fixed right-0 top-0 h-full w-60 bg-white shadow-lg px-4 pl-8 py-0 z-10 flex items-center transition-all transform ease-linear duration-1000 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="md:hidden absolute top-6 right-5 text-3xl text-black z-20 cursor-pointer"
              onClick={handleToggleMenu}
            >
              <RiCloseLine />
            </button>
            <ul>
              <li>
                <a
                  href="/"
                  className="block text-gray-800 py-2 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-gray-800 py-2 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="block text-gray-800 py-2 hover:text-gray-900"
                >
                  Featured
                </a>
              </li>

              <li>
                <a
                  href="#latest"
                  className="block text-gray-800 py-2 hover:text-gray-900"
                >
                  Latest
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-gray-800 py-2 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#newsletter"
                  className="block text-gray-800 py-2 hover:text-gray-900"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        )}

        <a
          href="/"
          className="hidden md:block text-white text-[26px] font-semibold md:text-[36px]"
        >
          ExploraLife
        </a>
        <ul className=" md:gap-4 hidden md:flex">
          <li>
            <a className="text-white text-[16px] font-normal" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="#featured">
              Featured
            </a>
          </li>
          <li>
            <a className="text-white text-[16px] font-normal" href="#latest">
              Latest
            </a>
          </li>

          <li>
            <a className="text-white text-[16px] font-normal" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <a href="#newsletter" className=" hidden md:flex px-[25px] py-[13px] bg-gray-700 bg-opacity-70 rounded justify-start items-start gap-2.5 ">
          <div className="text-white text-[13px] font-[Open Sans]  font-semibold">
            Newsletter
          </div>
        </a>
      </nav>

      <div className="flex-col justify-center items-center gap-[11px] inline-flex h-full text-center mx-4 md:m-0">
        <h1 className="text-white font-semibold text-2xl md:text-[32px]">
          Discover, Inspire, Explore: Your Gateway to a Life of Wonder
        </h1>
        <p className="text-white text-[16px] font-medium">
          Embark on a Journey of Discovery and Inspiration
        </p>
      </div>
    </header>
  );
};

export default Header;
