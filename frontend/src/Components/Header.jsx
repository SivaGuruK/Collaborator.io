import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center font-sans">
        <div className="text-3xl mt-5 md:text-4xl font-serif md:mt-10 ml-6 md:ml-24">
          Collaborator.io
        </div>
        <div className="hidden md:flex mr-32 gap-5 mt-10">
          <a
            href="#home"
            className="text-black font-serif hover:text-indigo-700 text-xl"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black font-serif hover:text-indigo-700 text-xl"
          >
            About
          </a>
          <a
            href="#features"
            className="text-black font-serif hover:text-indigo-700 text-xl"
          >
            Features
          </a>
          <a
            href="#support"
            className="text-black font-serif hover:text-indigo-700 text-xl"
          >
            Support
          </a>
          <a
            href="#use-cases"
            className="text-black font-serif hover:text-indigo-700 text-xl"
          >
            Use Cases
          </a>
          <a
            href="#signup"
            className="text-white font-serif hover:bg-indigo-700 text-xl rounded-full bg-blue-600 h-12 w-40 px-4 py-2 -mt-2"
          >
            SignUp/Login
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="text-customBlue text-3xl hover:text-indigo-700"
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden bg-white absolute top-0 left-0 w-full h-96 flex flex-col items-center justify-center space-y-4 font-sans">
          <button
            onClick={() => setIsMobile(false)}
            className="text-customBlue text-3xl absolute top-4 right-4 hover:text-indigo-700"
          >
            <FaTimes />
          </button>
          <a
            href="#home"
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            About
          </a>
          <a
            href="#features"
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            Features
          </a>
          <a
            href="#support"
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            Support
          </a>
          <a
            href="#use-cases"
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            Use Cases
          </a>
          <a
            href="#signup"
            className="text-white bg-blue-600 text-lg hover:bg-indigo-700 rounded-full h-12 w-40 px-4 py-2"
            onClick={() => setIsMobile(false)}
          >
            SignUp/Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
