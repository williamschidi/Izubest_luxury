import { useState } from "react";
import logo from "./../assets/logo1.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HashLink } from "react-router-hash-link";

function MobileToggleNav({
  setToggleMobileNav,
  toggleMobileNav,
}) {
  function handleMobileNav() {
    setToggleMobileNav(false);
    if (location.pathname !== "/") {
      navigate("/");
    }
  }
  return (
    <div
      className={`fixed w-full sm:w-[60%] bg-gray-700 transition-all duration-500 top-0 bottom-0 z-50 ${
        toggleMobileNav
          ? "right-0 sm:right-[40%] mlg:right-[100%]"
          : "right-[100%]  "
      }  `}
    >
      <div className="relative ">
        <h2 className="flex justify-center items-center gap-2 bg-white py-2">
          <img
            src={logo}
            alt="logo"
            className="w-[2rem] h-[2rem] xs:w-[2.4rem] xs:h-[2.4rem]"
          />
          <span className="text-xl xs:text-3xl tracking-tighter font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
            Izubest Luxury
          </span>
        </h2>
        <Icon
          icon="mingcute:close-fill"
          width="24"
          height="24"
          className="absolute top-2 right-3 text-yellow-700"
          onClick={() => setToggleMobileNav(false)}
        />
        <ul className="font-playfair w-full bg-gray-800">
          <li
            onClick={handleMobileNav}
            className="text-gray-50 text-sm px-8 py-4 border-b border-gray-600 cursor-pointer hover:bg-gradient-to-t from-gray-400 to-gray-700 hover:text-gray-800 font-semibold"
          >
            <HashLink smooth to="#about">
              ABOUT
            </HashLink>
          </li>
          <li
            className="text-gray-50 text-sm px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-t from-gray-400 to-gray-700 hover:text-gray-800 font-semibold"
            onClick={handleMobileNav}
          >
            <HashLink smooth to="#collections">
              COLLECTIONS
            </HashLink>
          </li>
          <li
            onClick={handleMobileNav}
            className="text-gray-50 text-sm px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-t from-gray-400 to-gray-700 hover:text-gray-800 font-semibold"
          >
            <HashLink smooth to="#latest">
              LATEST
            </HashLink>
          </li>
          <li
            onClick={handleMobileNav}
            className="text-gray-50 text-sm px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-t from-gray-400 to-gray-700 hover:text-gray-800 font-semibold"
          >
            <HashLink smooth to="#testimony">
              TESTIMONY
            </HashLink>
          </li>
          <li
            onClick={handleMobileNav}
            className="text-gray-50 text-sm px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-t from-gray-400 to-gray-700 hover:text-gray-800 font-semibold"
          >
            <HashLink smooth to="#location">
              SHOP
            </HashLink>
          </li>
        </ul>

        <div className="text-xs text-gray-100 pt-4 ">
          <button className="block px-12 py-3 font-bold hover:bg-gradient-to-tr from-gray-400 to-gray-700 hover:text-gray-800 w-full  text-left">
            NATIVE WEARS
          </button>
          <button className="block px-12 py-3 font-bold hover:bg-gradient-to-tr from-gray-400 to-gray-700 hover:text-gray-800 w-full  text-left">
            CORPERATE WEARS
          </button>
          <button className="block px-12 py-3 font-bold hover:bg-gradient-to-tr from-gray-400 to-gray-700 hover:text-gray-800 w-full  text-left">
            CASUAL WEARS
          </button>
          <button className="block px-12 py-3 font-bold hover:bg-gradient-to-tr from-gray-400 to-gray-700 hover:text-gray-800 w-full  text-left">
            FOOT WEARS
          </button>
          <button className="block px-12 py-3 font-bold hover:bg-gradient-to-tr from-gray-400 to-gray-700 hover:text-gray-800 w-full  text-left">
            JEWERIES
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileToggleNav;
