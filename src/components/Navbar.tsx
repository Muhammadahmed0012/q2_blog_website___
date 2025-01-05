import { Search } from "lucide-react";
import HamburgerMenu from "./Hamburger";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="ml-5 font-light text-3xl flex items-center mt-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-extrabold text-black tracking-tight transition-all duration-300 ease-in-out hover:text-[#7c4ee4]">
            Ahmed
          </h1>
          <h1 className="text-3xl font-extrabold text-[#7c4ee4] tracking-tight transition-all duration-300 ease-in-out hover:text-black">
            Blog
          </h1>
        </div>
      </div>
      <div className="lg:flex lg:items-center lg:space-x-10 md:flex md:items-center md:space-x-10 sm:flex sm:items-center sm:space-x-8 mr-5 text-lg font-extralight hidden mt-2">
        <a href="/blog_page">
          <h2 className="text-black text-xl font-extralight transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:scale-110 hover:underline cursor-pointer">
            Blog
          </h2>
        </a>
        <a href="/about">
          <h2 className="text-black text-xl font-extralight transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:scale-110 hover:underline cursor-pointer">
            About
          </h2>
        </a>

        <Search />
        <a href="/contact"><button className="bg-[#7c4ee4] text-white rounded-lg h-11 w-32 transition-all duration-300 ease-in-out hover:bg-[#5c2fbf] hover:shadow-lg hover:scale-105">
          Contact Us
        </button>
        </a>
      </div>
      <div className="lg:hidden md:hidden sm:hidden flex items-center">
        <HamburgerMenu />
      </div>
    </div>
  );
}
