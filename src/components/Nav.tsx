import { RiCloseLine } from "react-icons/ri";

const Nav = ({ isOpen, closeNav, handleToggleMenu }) => {
  return (
    <>
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
                onClick={closeNav}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-800 py-2 hover:text-gray-900"
                onClick={closeNav}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#featured"
                className="block text-gray-800 py-2 hover:text-gray-900"
                onClick={closeNav}
              >
                Featured
              </a>
            </li>

            <li>
              <a
                href="#latest"
                className="block text-gray-800 py-2 hover:text-gray-900"
                onClick={closeNav}
              >
                Latest
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-800 py-2 hover:text-gray-900"
                onClick={closeNav}
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#newsletter"
                className="block text-gray-800 py-2 hover:text-gray-900"
                onClick={closeNav}
              >
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
