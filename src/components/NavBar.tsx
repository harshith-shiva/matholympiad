import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/icons/logo.jpeg";
import { navLinks } from "./navlinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    text: string,
    isLive?: boolean
  ) => {
    if (isLive === false) {
      e.preventDefault();
      alert(`${text} will be published later`);
      return;
    }
    setActive(text);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
   
        <div className="flex h-16 items-center justify-between">
          

          <div className="flex items-center space-x-3 min-w-[260px] whitespace-nowrap">
            <img
              src={Logo}
              alt="PSG TECH Logo"
              width={40}
              height={40}
              className="shrink-0"
            />
            <div className="text-l leading-none font-semibold text-black">
              PSG COLLEGE OF TECHNOLOGY
            </div>
          </div>


          <div className="hidden lg:flex flex-1 justify-end items-center space-x-6 ml-8">
            {navLinks.slice(1).map(({ text, link, isBlank, isLive }) => (
              <a
                key={text}
                href={link}
                target={isBlank ? "_blank" : undefined}
                rel={isBlank ? "noopener noreferrer" : undefined}
                onClick={(e) => handleNavClick(e, text, isLive)}
                className={`flex items-center justify-center h-10 px-4 font-medium rounded-full transition-all duration-300 ${
                  active === text
                    ? "bg-blue-500 text-white"
                    : "text-black hover:bg-blue-500 hover:text-white"
                }`}
              >
                {text}
              </a>
            ))}
          </div>


          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none flex items-center justify-center"
            >
              {isOpen ? (
                <X size={28} className="text-black" />
              ) : (
                <Menu size={28} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-2 bg-white shadow-md">
          {navLinks.slice(1).map(({ text, link, isLive }) => (
            <a
              key={text}
              href={link}
              onClick={(e) => {
                if (isLive === false) {
                  e.preventDefault();
                  alert(`${text} will be published later`);
                  setIsOpen(false);
                  return;
                }
                setActive(text);
                setIsOpen(false);
              }}
              className={`flex items-center h-10 px-3 rounded-md font-medium transition-all duration-300 ${
                active === text
                  ? "bg-blue-500 text-white"
                  : "text-black hover:bg-blue-500 hover:text-white"
              }`}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
