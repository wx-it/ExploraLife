import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="space-y-4">
          <a
            href="/"
            className=" text-white text-[26px] font-semibold md:text-[36px]"
          >
            ExploraLife
          </a>
          <div className="flex justify-center mb-4">
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <ul className="text-center md:text-left mb-4 md:mb-0 md:flex md:gap-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/blog" className="text-white hover:text-gray-300">
              Blog
            </a>
          </li>
        </ul>
        <div className="text-center md:text-left">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} ExploraLife. All rights reserved.
          </p>
          <p className="text-[10px] mt-4">Designed and developed by Zineb</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
