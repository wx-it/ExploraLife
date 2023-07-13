import background from "/images/background-2.jpg";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Nav from "../components/Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function closeNav() {
    setIsOpen(false);
  }
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

        <Nav
          isOpen={isOpen}
          closeNav={closeNav}
          handleToggleMenu={handleToggleMenu}
        />

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
        <a
          href="#newsletter"
          className=" hidden md:flex px-[25px] py-[13px] bg-gray-700 bg-opacity-70 rounded justify-start items-start gap-2.5 "
        >
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
