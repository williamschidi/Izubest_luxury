import { Icon } from "@iconify/react/dist/iconify.js";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./../assets/logo1.jpg";
import { useEffect, useRef, useState } from "react";

function Header({ data }) {
  const navRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [toggleMobileNav, setToggleMobileNav] =
    useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    collections,
    setCollections,
    isSticky,
    setIsSticky,
  } = data;

  function handleOnChange(e) {
    setCollections(e.target.value);
  }

  function handleSubmit() {
    setCollections("");
  }
  function handleNavigation(tab) {
    if (location.pathname !== "/") {
      navigate("/");
      document
        .getElementById(tab)
        .scrollIntoView({ behavior: smooth });
    } else {
      document
        .getElementById(tab)
        .scrollIntoView({ behavior: smooth });
    }
  }

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero").offsetHeight;
      if (!heroHeight || navRef.current) return;
      const navHeight = navRef.current.offsetHeight;
      setIsSticky(window.scrollY > heroHeight - navHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scoll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${
        isSticky
          ? "fixed top-0 bg-gray-50/90 z-20 shadow-xl"
          : ""
      } w-full`}
    >
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
            <li className="text-yellow-700 text-md px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-yellow-800 hover:text-white font-semibold">
              ABOUT
            </li>
            <li className="text-yellow-700 text-md px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-yellow-800 hover:text-white font-semibold">
              COLLECTIONS
            </li>
            <li className="text-yellow-700 text-md px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-yellow-800 hover:text-white font-semibold">
              LATEST
            </li>
            <li className="text-yellow-700 text-md px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-yellow-800 hover:text-white font-semibold">
              TESTIMONY
            </li>
            <li className="text-yellow-700 text-md px-8 py-4 border-b border-gray-500 cursor-pointer hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-yellow-800 hover:text-white font-semibold">
              SHOP
            </li>
          </ul>

          <div className="text-xs bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent pt-4">
            <button className="block px-8 py-3 font-bold hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white w-full  text-left">
              NATIVE WEARS
            </button>
            <button className="block px-8 py-3 font-bold hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white w-full  text-left">
              CORPERATE WEARS
            </button>
            <button className="block px-8 py-3 font-bold hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white w-full  text-left">
              CASUAL WEARS
            </button>
            <button className="block px-8 py-3 font-bold hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white w-full  text-left">
              FOOT WEARS
            </button>
            <button className="block px-8 py-3 font-bold hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white w-full  text-left">
              JEWERIES
            </button>
          </div>
        </div>
      </div>

      <div className="hidden mlg:flex justify-between items-center bg-gradient-to-r from-yellow-500 to-yellow-800 px-6 h-[3rem] w-full">
        <div className="inline-flex justify-start items-center gap-3">
          <a
            href="http://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-blue-900"
          >
            <Icon
              icon="basil:facebook-solid"
              width="24"
              height="24"
              className="w-[1.1rem] h-[1.1rem] text-white"
            />
          </a>
          <a
            href="http://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-blue-500"
          >
            <Icon
              icon="si:twitter-fill"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white"
            />
          </a>
          <a
            href="http://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-gradient-to-b from-orange-700 to-yellow-600"
          >
            <Icon
              icon="flowbite:instagram-solid"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white"
            />
          </a>
          <a
            href="http://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-orange-600"
          >
            <Icon
              icon="iconoir:youtube-solid"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white"
            />
          </a>
        </div>
        <p className="text-sm font-semibold text-gray-100">
          Shop over #200,000 and enjoy FREE delivery!
        </p>
        <div className="inline-flex justify-start items-center gap-6 h-full">
          <HashLink
            smooth
            to="#location"
            className="inline-flex justify-center items-center gap-1 hover:bg-yellow-950 h-full w-[6rem]"
          >
            <Icon
              icon="basil:location-outline"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white"
            />
            <span className="text-sm font-semibold text-gray-100">
              Store
            </span>
          </HashLink>
          <NavLink
            to="/login"
            className="inline-flex justify-center items-center gap-1 cursor-pointer hover:bg-yellow-950 w-[6rem] h-full"
          >
            <Icon
              icon="guidance:user-1"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white font-bold"
            />
            <span className="text-sm font-semibold text-gray-100">
              Login
            </span>
          </NavLink>
        </div>
      </div>
      <div className=" px-3 xs:px-6 flex justify-between items-center border-t border-b border-yellow-600 h-[3.5rem] sm:h-[4rem] md:h-[5rem] shadow-2xl">
        <Icon
          icon="solar:hamburger-menu-outline"
          width="24"
          height="24"
          className="mlg:hidden"
          onClick={() => setToggleMobileNav(true)}
        />
        <div
          className="inline-flex justify-start items-center gap-2 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <img
            src={logo}
            alt="logo"
            className="w-[2rem] h-[2rem] xs:w-[2.4rem] xs:h-[2.4rem] mlg:w-[3rem] mlg:h-[3rem]"
          />
          <span className="text-2xl xs:text-3xl sm:text-2xl mlg:text-3xl lg:text-4xl tracking-tighter font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
            Izubest Luxury
          </span>
        </div>
        <div className="hidden sm:flex mlg:hidden border border-yellow-600 items-center gap 2 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
          <input
            onBlur={() => {
              setIsActive(false), setCollections("");
            }}
            onFocus={() => setIsActive(true)}
            type="text"
            placeholder="Search Collections ..."
            name="collections"
            value={collections}
            onChange={handleOnChange}
            className="w-[12rem] md:w-[14rem] rounded-full text-sm focus:outline-none bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent px-3 py-1 font-playfair"
          />
          <button
            onClick={handleSubmit}
            className={`font-bold text-sm px-3 py-1  ${
              isActive
                ? "bg-gradient-to-tr from-yellow-800 to-yellow-500 text-white"
                : ""
            }`}
          >
            SEARCH
          </button>
        </div>
        <ul className="hidden mlg:flex justify-between items-center gap-2 lg:gap-4 font-playfair">
          <li
            onClick={(about) => handleNavigation(about)}
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li
            onClick={(collection) =>
              handleNavigation(collection)
            }
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#collections">
              Collections
            </HashLink>
          </li>
          <li
            onClick={(latest) => handleNavigation(latest)}
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#latest">
              Latest
            </HashLink>
          </li>
          <li
            onClick={(testimony) =>
              handleNavigation(testimony)
            }
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#testimony">
              Testimony
            </HashLink>
          </li>
          <li
            onClick={(location) =>
              handleNavigation(location)
            }
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#location">
              Shop
            </HashLink>
          </li>
        </ul>

        <div className="inline-flex justify-between items-center gap-3 xs:gap-4">
          <div className="flex justify-between items-center gap-1 cursor-pointer">
            <Icon
              icon="tdesign:cart-filled"
              width="24"
              height="24"
              className="w-[1.2rem] h-[1.2rem] text-yellow-800 "
            />

            <span className="hidden md:block font-semibold text-sm bg-gradient-to-b from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
              cart
            </span>
            <span className="font-semibold text-sm bg-gradient-to-b from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
              0
            </span>
          </div>
          <div className="flex justify-between items-center gap-1 cursor-pointer">
            <Icon
              icon="weui:like-filled"
              width="24"
              height="24"
              className="w-[1.2rem] h-[1.2rem] text-yellow-800"
            />

            <span className="hidden md:block font-semibold text-sm bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
              wishlist
            </span>
            <span className="font-semibold text-sm bg-gradient-to-b from-yellow-400 to-yellow-800 text-transparent bg-clip-text">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto sm:hidden border border-yellow-600  flex justify-between items-center gap-2 rounded-md">
        <input
          onBlur={() => {
            setIsActive(false), setCollections("");
          }}
          onFocus={() => setIsActive(true)}
          type="text"
          placeholder="Search Collections ..."
          name="collections"
          value={collections}
          onChange={handleOnChange}
          className="w-[14rem] lg:w-[18rem] rounded-md text-sm focus:outline-none bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent px-3 py-1 font-playfair"
        />
        <button
          onClick={handleSubmit}
          className={`font-bold text-sm px-3 py-1 bg-gradient-to-t from-yellow-500 to-yellow-800 text-white rounded-md`}
        >
          SEARCH
        </button>
      </div>
      <div
        id="categories"
        className={`${
          location.pathname === "/"
            ? "hidden mlg:flex"
            : "hidden"
        }  h-[2rem]  justify-center items-center gap-6 lg:gap-10 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent px-6 `}
      >
        <div className=" inline-flex justify-end items-center text-xs font-bold  h-full">
          <button className="w-[7rem] lg:w-[8rem] border-l border-r border-yellow-600 h-full hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white border-b">
            NATIVE WEARS
          </button>
          <button className="w-[8rem] border-r border-yellow-600 h-full hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white border-b">
            CORPERATE WEARS
          </button>
          <button className="w-[7rem] lg:w-[8rem] border-r border-yellow-600 h-full hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white border-b">
            CASUAL WEARS
          </button>
          <button className="w-[6rem] lg:w-[8rem] border-r border-yellow-600 h-full hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white border-b">
            FOOT WEARS
          </button>
          <button className="w-[6rem] lg:w-[8rem] border-r border-yellow-600 h-full hover:bg-gradient-to-tr from-yellow-600 to-yellow-900 hover:text-white border-b">
            JEWERIES
          </button>
        </div>

        <div className="border border-yellow-600  flex items-center gap 2">
          <input
            onBlur={() => {
              setIsActive(false), setCollections("");
            }}
            onFocus={() => setIsActive(true)}
            type="text"
            placeholder="Search Collections ..."
            name="collections"
            value={collections}
            onChange={handleOnChange}
            className="w-[14rem] lg:w-[18rem] rounded-full text-sm focus:outline-none bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent px-3 py-1 font-playfair"
          />
          <button
            onClick={handleSubmit}
            className={`font-bold text-sm px-3 py-1 ${
              isActive
                ? "bg-gradient-to-r from-yellow-600 to-yellow-800 text-white"
                : ""
            }`}
          >
            SEARCH
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
