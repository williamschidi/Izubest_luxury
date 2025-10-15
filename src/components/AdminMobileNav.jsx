import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "./../assets/logo1.jpg";
import { useNavigate } from "react-router-dom";
function AdminMobileNav({
  setToggleMobileNav,
  toggleMobileNav,
}) {
  const navigate = useNavigate();

  function handleNav(x) {
    setToggleMobileNav(false);
    navigate(x);
  }
  return (
    <div
      className={`fixed w-full sm:w-[60%] bg-gray-100  transition-all duration-500 top-0 bottom-0 z-100 min-h-screen ${
        toggleMobileNav
          ? "right-0 sm:right-[40%] mlg:right-[100%]"
          : "right-[100%]  "
      }  `}
    >
      <nav className="flex justify-between items-center px-4 h-[4rem] bg-white">
        <h2 className="flex justify-center items-center gap-2 py-2">
          <img
            src={logo}
            alt="logo"
            className="w-[2rem] h-[2rem] xs:w-[2.4rem] xs:h-[2.4rem]"
          />
          <span className="text-xl xs:text-2xl mlg:text-3xl lg:text-4xl tracking-tight font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
            Izubest Luxury
          </span>
        </h2>
        <button>
          <Icon
            icon="mingcute:close-fill"
            width="24"
            height="24"
            className="absolute top-2 right-3 text-yellow-700"
            onClick={() => setToggleMobileNav(false)}
          />
        </button>
      </nav>
      <ul className="text-center font-playfair text-sm  font-semibold bg-gradient-to-tr from-gray-300 to-gray-400  text-stone-100 ">
        <li
          className="uppercase hover:bg-gradient-to-tr from-gray-400 to-gray-500 cursor-pointer border-b border-gray-100 py-9"
          onClick={() =>
            handleNav("dashboard/create-collection")
          }
        >
          create collection
        </li>
        <li
          className="uppercase hover:bg-gradient-to-tr from-gray-400 to-gray-500 cursor-pointer border-b border-gray-100 py-10"
          onClick={() =>
            handleNav("dashboard/get-collections")
          }
        >
          Edit collection
        </li>
        <li
          className="uppercase hover:bg-gradient-to-tr from-gray-400 to-gray-500 cursor-pointer border-b border-gray-100 py-10"
          onClick={() =>
            handleNav("dashboard/create-latest")
          }
        >
          create latest
        </li>
        <li
          className="uppercase hover:bg-gradient-to-tr from-gray-400 to-gray-500 cursor-pointer border-b border-gray-100 py-10"
          onClick={() => handleNav("dashboard/edit-latest")}
        >
          edit latest
        </li>
        <li
          className="uppercase hover:bg-gradient-to-tr from-gray-400 to-gray-500 cursor-pointer border-b border-gray-100 py-10"
          onClick={() =>
            handleNav("dashboard/create-collection")
          }
        >
          review
        </li>
        <li
          className="uppercase hover:bg-gradient-to-tr from-gray-400 to-gray-500 cursor-pointer border-b border-gray-100 py-9"
          onClick={() =>
            handleNav("dashboard/create-collection")
          }
        >
          settings
        </li>
      </ul>
    </div>
  );
}

export default AdminMobileNav;
