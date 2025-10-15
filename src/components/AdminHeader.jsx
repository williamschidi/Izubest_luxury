import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "./../assets/logo1.jpg";
import { useState } from "react";
import { useGetMeQuery } from "./feature/apiFeatures/apiSlice";
import { useLocation } from "react-router-dom";
import AdminMobileNav from "./AdminMobileNav";

function AdminHeader() {
  const [toggleMobileNav, setToggleMobileNav] =
    useState(false);
  const location = useLocation();

  const { data } = useGetMeQuery();
  try {
    console.log(data.user);
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <AdminMobileNav
        setToggleMobileNav={setToggleMobileNav}
        toggleMobileNav={toggleMobileNav}
      />

      <div className=" px-3 sm:px-4 flex justify-end items-center  gap-4  h-[4rem] shadow-lg">
        {location.pathname.startsWith(
          "/admin/dashboard"
        ) && (
          <Icon
            icon="solar:hamburger-menu-outline"
            width="24"
            height="24"
            className="sm:hidden"
            onClick={() => setToggleMobileNav(true)}
          />
        )}

        <div className="mr-auto inline-flex justify-start items-center gap-1 xs:gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-[2rem] h-[2rem] xs:w-[2.4rem] xs:h-[2.4rem] mlg:w-[3rem] mlg:h-[3rem]"
          />
          <span className="text-xl xs:text-2xl mlg:text-3xl lg:text-4xl tracking-tight font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
            Izubest Luxury
          </span>
        </div>
        {data ? (
          <>
            <p className="text-xs bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              Welcome |{" "}
              <span className="font-semibold">
                {data?.user?.firstName}
              </span>
            </p>
            <div className="w-[2rem] h-[2rem] rounded-full">
              <img
                src={data?.user?.image.url}
                alt="user"
                className="w-full h-full rounded-full"
              />
            </div>
          </>
        ) : (
          <p className="pr-4 text-sm font-semibold">
            {location.pathname === "/admin/login"
              ? "Login"
              : "Sign up"}
          </p>
        )}
      </div>
    </>
  );
}

export default AdminHeader;
