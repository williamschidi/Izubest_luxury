import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

function AdminDashboard() {
  return (
    <div className="flex-1 flex justify-center items-start shadow-2xl ">
      <aside className="hidden sm:block w-[7.5rem] xs:w-[10rem] bg-gradient-to-r from-yellow-500 to-yellow-800 h-full">
        <ul className=" space-y-8 py-4">
          <li className="group hover:bg-gradient-to-tr from-stone-100 to-stone-200 w-full transition-all duration-1000 ease-in-out">
            <NavLink
              to="create-collection"
              className={({ isActive }) =>
                `flex flex-start items-center gap-1 sm:gap-2 text-gray-50 group-hover:text-yellow-700/80 transition-all duration-500 ease-in-out px-1 sm:px-2 py-2 ${
                  isActive
                    ? "text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-700 w-[100%]"
                    : ""
                }`
              }
            >
              <Icon
                icon="material-symbols:post-add"
                width="24"
                height="24"
                className="hidden xs:block w-[1.2rem] h-[1.2rem]"
              />
              <span className="tracking-tight font-semibold text-xs">
                CREATE COLLECTION
              </span>
            </NavLink>
          </li>
          <li className="group hover:bg-gradient-to-tr from-stone-100 to-stone-200 w-full transition-all duration-1000 ease-in-out">
            <NavLink
              to="get-collections"
              className={({ isActive }) =>
                `flex flex-start items-center gap-1 sm:gap-2 text-gray-50 group-hover:text-yellow-700/80 transition-all duration-500 ease-in-out px-1 sm:px-2 py-2 ${
                  isActive
                    ? "text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-700 w-[100%]"
                    : ""
                }`
              }
            >
              <Icon
                icon="material-symbols:post-add"
                width="24"
                height="24"
                className="hidden xs:block w-[1.2rem] h-[1.2rem]"
              />
              <span className="tracking-tight font-semibold text-xs">
                EDIT COLLECTION
              </span>
            </NavLink>
          </li>
          <li className="group hover:bg-gradient-to-tr from-stone-100 to-stone-200 w-full transition-all duration-1000 ease-in-out">
            <NavLink
              to="create-latest"
              className={({ isActive }) =>
                `flex flex-start items-center gap-1 sm:gap-2 text-gray-50 group-hover:text-yellow-700/80 transition-all duration-500 ease-in-out px-1 sm:px-2 py-2 ${
                  isActive
                    ? "text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-700 w-[100%]"
                    : ""
                }`
              }
            >
              <Icon
                icon="material-symbols:post-add"
                width="24"
                height="24"
                className="hidden xs:block w-[1.2rem] h-[1.2rem]"
              />
              <span className="tracking-tight font-semibold text-xs">
                CREATE LATEST
              </span>
            </NavLink>
          </li>
          <li className="group hover:bg-gradient-to-tr from-stone-100 to-stone-200 w-full transition-all duration-1000 ease-in-out">
            <NavLink
              to="edit-latest"
              className={({ isActive }) =>
                `flex flex-start items-center gap-1 sm:gap-2 text-gray-50 group-hover:text-yellow-700/80 transition-all duration-500 ease-in-out px-1 sm:px-2 py-2 ${
                  isActive
                    ? "text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-700 w-[100%]"
                    : ""
                }`
              }
            >
              <Icon
                icon="material-symbols:post-add"
                width="24"
                height="24"
                className="hidden xs:block w-[1.2rem] h-[1.2rem]"
              />
              <span className="tracking-tight font-semibold text-xs">
                EDIT LATEST
              </span>
            </NavLink>
          </li>
          <li className="group flex flex-start items-center gap-2  hover:bg-gradient-to-tr from-stone-100 to-stone-200 w-full px-2 py-2 transition-all duration-1000 ease-in-out">
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                `flex flex-start items-center gap-1 sm:gap-2 text-gray-50 group-hover:text-yellow-700/80 transition-all duration-500 ease-in-out px-1 sm:px-2 py-2 ${
                  isActive
                    ? "text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-700 w-[100%]"
                    : ""
                }`
              }
            >
              <Icon
                icon="material-symbols-light:rate-review-outline-sharp"
                width="24"
                height="24"
                className="hidden xs:block w-[1.2rem] h-[1.2rem]"
              />
              <span className="tracking-tight font-semibold text-xs">
                REVIEWS
              </span>
            </NavLink>
          </li>

          <li className="group flex flex-start items-center gap-2 hover:bg-gradient-to-tr from-stone-100 to-stone-200 w-full px-2 py-2 transition-all duration-1000 ease-in-out">
            <NavLink
              to="setting"
              className={({ isActive }) =>
                `flex flex-start items-center gap-1 sm:gap-2 text-gray-50 group-hover:text-yellow-700/80 transition-all duration-500 ease-in-out px-1 sm:px-2 py-2 ${
                  isActive
                    ? "text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-700 w-[100%]"
                    : ""
                }`
              }
            >
              <Icon
                icon="ant-design:setting-outlined"
                width="24"
                height="24"
                className="hidden xs:block w-[1.2rem] h-[1.2rem] "
              />
              <span className="tracking-tight font-semibold text-xs">
                SETTING
              </span>
            </NavLink>
          </li>
        </ul>
      </aside>

      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-gradient-to-tr from-gray-50 to-gray-200"
      >
        <Outlet />
      </motion.main>
    </div>
  );
}

export default AdminDashboard;
