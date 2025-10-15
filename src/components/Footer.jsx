import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <div className="text-center z-[1000]">
      <div
        className={`bg-gray-800/80 ${
          location.pathname.startsWith("/admin")
            ? "py-3 sm:pt-4 pb-2 space-y-2"
            : "py-6 sm:py-8 space-y-3"
        } `}
      >
        <div className="">
          <h2
            className={` tracking-[.1.5em] font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent ${
              location.pathname.startsWith("/admin")
                ? "text-xl xs:text-2xl sm:text-xl mlg:text-2xl lg:text-3xl "
                : "text-2xl xs:text-3xl sm:text-2xl mlg:text-3xl lg:text-4xl"
            }`}
          >
            Izubest Luxury
          </h2>
          <span
            className={`${
              location.pathname.startsWith("/admin")
                ? "text-xs"
                : "text-sm"
            } uppercase tracking-[0.2em] font-semibold bg-gradient-to-tr from-yellow-600 to-yellow-800 bg-clip-text text-transparent`}
          >
            Where demands meet satisfaction
          </span>
        </div>

        <div
          className={`inline-flex justify-start items-center ${
            location.pathname.startsWith("/admin")
              ? "gap-4"
              : "gap-8"
          } `}
        >
          <a
            href="http://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              location.pathname.startsWith("/admin")
                ? "w-[1.4rem] h-[1.4rem]"
                : "w-[1.7rem] h-[1.7rem]"
            } rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-blue-900`}
          >
            <Icon
              icon="basil:facebook-solid"
              width="24"
              height="24"
              className={` text-white ${
                location.pathname.startsWith("/admin")
                  ? "w-[.9rem] h-[.9rem]"
                  : "w-[1.1rem] h-[1.1rem]"
              }`}
            />
          </a>
          <a
            href="http://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              location.pathname.startsWith("/admin")
                ? "w-[1.4rem] h-[1.4rem]"
                : "w-[1.7rem] h-[1.7rem]"
            } rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-blue-500`}
          >
            <Icon
              icon="si:twitter-fill"
              width="24"
              height="24"
              className={` text-white ${
                location.pathname.startsWith("/admin")
                  ? "w-[.9rem] h-[.9rem]"
                  : "w-[1.1rem] h-[1.1rem]"
              }`}
            />
          </a>
          <a
            href="http://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              location.pathname.startsWith("/admin")
                ? "w-[1.4rem] h-[1.4rem]"
                : "w-[1.7rem] h-[1.7rem]"
            } rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-gradient-to-b from-orange-700 to-yellow-600`}
          >
            <Icon
              icon="flowbite:instagram-solid"
              width="24"
              height="24"
              className={` text-white ${
                location.pathname.startsWith("/admin")
                  ? "w-[.9rem] h-[.9rem]"
                  : "w-[1.1rem] h-[1.1rem]"
              }`}
            />
          </a>
          <a
            href="http://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              location.pathname.startsWith("/admin")
                ? "w-[1.4rem] h-[1.4rem]"
                : "w-[1.7rem] h-[1.7rem]"
            } rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-orange-600`}
          >
            <Icon
              icon="iconoir:youtube-solid"
              width="24"
              height="24"
              className={` text-white ${
                location.pathname.startsWith("/admin")
                  ? "w-[.9rem] h-[.9rem]"
                  : "w-[1.1rem] h-[1.1rem]"
              }`}
            />
          </a>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-100 text-xs py-2 tracking-[0.2em]">
        copyright &copy; {new Date().getFullYear()} Izubest
        Luxury Ltd
      </div>
    </div>
  );
}

export default Footer;
