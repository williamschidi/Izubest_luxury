import { Icon } from "@iconify/react/dist/iconify.js";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./../../assets/logo1.jpg";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import MobileToggleNav from "./MobileToggleNav";

function Header({ data }) {
  const navRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [toggleMobileNav, setToggleMobileNav] =
    useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const state = useSelector((state) => state.cart);

  const { setCollections, isSticky, setIsSticky } = data;

  function handleOnChange(e) {
    setSearchValue(e.target.value);
  }

  function handlekeyDown(e) {
    e.preventDefault();
    if (e.key === "Enter" && searchValue.trim() !== "") {
      setCollections(searchValue);
      setSearchValue("");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      setCollections(searchValue);
      setSearchValue("");
    }
  }

  function handleNavigation(tab) {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }

  function handleCart() {
    navigate("/cart");
  }

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hero = document.getElementById("hero");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className={`${
        isSticky
          ? "fixed top-0 bg-gray-50 z-20 shadow-lg transition-all"
          : ""
      } w-full`}
    >
      {/* toggle nav menu */}
      <MobileToggleNav
        setToggleMobileNav={setToggleMobileNav}
        toggleMobileNav={toggleMobileNav}
      />
      {!isSticky ? (
        <div className="hidden mlg:flex justify-between items-center bg-gradient-to-r from-yellow-500 to-yellow-800 px-6 h-[2.4rem] w-full">
          <div className="inline-flex justify-start items-center gap-3">
            <a
              href="http://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[1.4rem] h-[1.4rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-blue-900"
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
              className="w-[1.4rem] h-[1.4rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-blue-500"
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
              className="w-[1.4rem] h-[1.4rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-gradient-to-b from-orange-700 to-yellow-600"
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
              className="w-[1.4rem] h-[1.4rem] rounded-full bg-yellow-700 inline-flex justify-center items-center hover:bg-orange-600"
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
      ) : (
        ""
      )}
      <div className="pl-2 pr-4 sm:px-6 flex justify-start sm:justify-between items-center border-t border-b border-yellow-600 h-[3.5rem] sm:h-[4rem] md:h-[5rem] shadow-2xl gap-2 sm:gap-0">
        <Icon
          icon="solar:hamburger-menu-outline"
          width="24"
          height="24"
          className=" mlg:hidden h-5 w-10"
          onClick={() => setToggleMobileNav(true)}
        />
        <div
          className="inline-flex justify-start items-center gap-1 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <img
            src={logo}
            alt="logo"
            className=" w-[1.8rem] h-[1.8rem] xs:w-[2.4rem] xs:h-[2.4rem] mlg:w-[3rem] mlg:h-[3rem]"
          />
          <span
            className={`text-xl xs:text-3xl sm:text-2xl mlg:text-3xl lg:text-4xl tracking-tighter font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent ${
              isActive ? "hidden sm:block" : "block"
            }`}
          >
            Izubest Luxury
          </span>
        </div>

        {/* search bar for tablet view */}

        <div className="hidden sm:flex mlg:hidden border border-yellow-600 items-center gap 2 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
          <input
            onBlur={() => {
              setIsActive(false);
              setCollections("");
            }}
            onFocus={() => setIsActive(true)}
            type="text"
            placeholder="Search Collections ..."
            name="collections"
            value={searchValue}
            onChange={handleOnChange}
            className="w-[12rem] md:w-[14rem] rounded-full text-sm focus:outline-none bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent px-3 py-1 font-playfair"
            list="wear"
            onClick={handleSubmit}
          />
          <datalist
            id="wear"
            className="text-sm font-light"
          >
            <option value="native-wear" />
            <option value="casual-wear" />
            <option value="corperate-wear" />
            <option value="foot-wear" />
            <option value="jeweries" />
          </datalist>
          <button
            onClick={handleSubmit}
            className={`font-bold text-xs sm:text-sm px-3 py-1 tracking-tight ${
              isActive
                ? "bg-gradient-to-t from-yellow-800 to-yellow-400 text-white"
                : ""
            }`}
          >
            SEARCH
          </button>
        </div>

        {/* nav for laptop and desktop view */}

        <ul className="hidden mlg:flex justify-between items-center gap-2 lg:gap-4 font-playfair">
          <li
            onClick={() => handleNavigation("about")}
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li
            onClick={() => handleNavigation("collections")}
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#collections">
              Collections
            </HashLink>
          </li>
          <li
            onClick={() => handleNavigation("latest")}
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#latest">
              Latest
            </HashLink>
          </li>
          <li
            onClick={() => handleNavigation("testimony")}
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#testimony">
              Testimony
            </HashLink>
          </li>
          <li
            onClick={() => handleNavigation("location")}
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent text-md px-2 lg:px-4 pb-2 cursor-pointer border-b-2 border-transparent hover:border-yellow-600 font-semibold"
          >
            <HashLink smooth to="#location">
              Shop
            </HashLink>
          </li>
        </ul>

        <div className="ml-auto sm:ml-0 inline-flex justify-between items-center gap-3 xs:gap-4">
          {/* search input for mobile view */}
          <div className="block sm:hidden">
            <AnimatePresence
              onExitComplete={() => setShowIcon(true)}
            >
              {isActive && (
                <motion.div
                  className="relative mr-4"
                  key="search-input"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="search collections..."
                    name="search"
                    onChange={handleOnChange}
                    onKeyDown={handlekeyDown}
                    className="rounded-full pl-10  border border-yellow-600 outline-none focus:ring  focus:ring-yellow-700 text-gray-600"
                    list="wear"
                  />
                  <datalist
                    id="wear"
                    className="text-sm font-light"
                  >
                    <option value="native-wear" />
                    <option value="casual-wear" />
                    <option value="corperate-wear" />
                    <option value="foot-wear" />
                    <option value="jeweries" />
                  </datalist>

                  <button
                    className="absolute inset-y-0 left-2"
                    onClick={() => {
                      setIsActive(false);
                      setShowIcon(false);
                    }}
                  >
                    <Icon
                      icon="mynaui:search"
                      width="24"
                      height="24"
                      className=" w-[1rem] h-[1rem] text-yellow-800 "
                    />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            {showIcon && !isActive && (
              <button
                className="block sm:hidden cursor-pointer"
                onClick={() => {
                  setIsActive(true);
                  setShowIcon(false);
                }}
              >
                <Icon
                  icon="mynaui:search"
                  width="24"
                  height="24"
                  className="w-[1.2rem] h-[1.2rem] text-yellow-800 "
                />
              </button>
            )}
          </div>
          {/* ---------- */}
          <button
            className="flex justify-between items-center gap-1 cursor-pointer"
            onClick={handleCart}
          >
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
              {state.cart.items?.length}
            </span>
          </button>
          <div className="hidden sm:flex justify-between items-center gap-1 cursor-pointer">
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

      {/* categories nav and searchbar for desktop view */}

      {!isSticky ? (
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

          {/* search bar for desktop view */}
          <div className="border border-yellow-600  flex items-center gap 2">
            <input
              onBlur={() => {
                setIsActive(false), setCollections("");
              }}
              onFocus={() => setIsActive(true)}
              type="text"
              placeholder="Search Collections ..."
              name="collections"
              value={searchValue}
              onChange={handleOnChange}
              onClick={handleSubmit}
              className="w-[14rem] lg:w-[18rem] rounded-full text-sm focus:outline-none bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent px-3 py-1 font-playfair"
              list="wear"
            />
            <datalist
              id="wear"
              className="text-sm font-light"
            >
              <option value="native-wear" />
              <option value="casual-wear" />
              <option value="corperate-wear" />
              <option value="foot-wear" />
              <option value="jeweries" />
            </datalist>
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
      ) : (
        ""
      )}
    </nav>
  );
}

export default Header;
