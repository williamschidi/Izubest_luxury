import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "./../assets/logo1.jpg";
import user from "./../assets/user.png";
import { useState } from "react";

function AdminHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleMobileNav, setToggleMobileNav] =
    useState(false);

  function handleOnChange(e) {}
  function handleSubmit() {
    // setCollections("");
  }

  return (
    <div className=" px-3 sm:px-4 flex justify-end items-center  gap-4  h-[4rem] shadow-lg">
      {isLoggedIn && (
        <Icon
          icon="solar:hamburger-menu-outline"
          width="24"
          height="24"
          className="mlg:hidden"
          onClick={() => setToggleMobileNav(true)}
        />
      )}

      <div className="mr-auto inline-flex justify-start items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-[2rem] h-[2rem] xs:w-[2.4rem] xs:h-[2.4rem] mlg:w-[3rem] mlg:h-[3rem]"
        />
        <span className="text-2xl xs:text-3xl sm:text-2xl mlg:text-3xl lg:text-4xl tracking-tight font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          Izubest Luxury
        </span>
      </div>
      <div
        className={`relative flex items-center gap 2 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent ${
          isLoggedIn ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          placeholder="Search ...."
          name="collections"
          //   value={collections}
          onChange={handleOnChange}
          className="w-[12rem] md:w-[16rem] rounded-full text-sm focus:outline-none bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent px-8 py-1 font-playfair border border-yellow-600"
        />
        <Icon
          icon="iconoir:search"
          width="24"
          height="24"
          className="absolute left-[6px] top-[6px] text-yellow-600 w-[1.1rem] h-[1.1rem]"
        />
      </div>
      <p className="text-xs bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
        Welcome |{" "}
        <span className="font-semibold">Williams</span>
      </p>
      <div className="w-[2rem] h-[2rem] rounded-full">
        <img
          src={user}
          alt="user"
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
}

export default AdminHeader;
