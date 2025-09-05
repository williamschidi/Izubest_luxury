import { NavLink, Outlet } from "react-router-dom";

import logo1 from "./../assets/logo-2.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
// import Nav from "../container/Nav";

function AdminDashboard() {
  return (
    <div className="flex-1 flex justify-center items-start shadow-2xl ">
      <aside className="w-[10rem] bg-gradient-to-r from-yellow-500 to-yellow-800 h-full">
        <ul className=" space-y-8 py-4">
          <li className="group flex flex-start items-center gap-2 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 w-full px-4 py-2 transition-all duration-1000 ease-in-out">
            <Icon
              icon="material-symbols:post-add"
              width="24"
              height="24"
              className="text-gray-50 w-[1.2rem] h-[1.2rem]  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            />
            <NavLink
              to="create-blog"
              className="text-gray-50 text-xs font-semibold  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            >
              CREATE POST
            </NavLink>
          </li>
          <li className="group flex flex-start items-center gap-2 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 w-full px-4 py-2 transition-all duration-1000 ease-in-out">
            <Icon
              icon="material-symbols:post-add"
              width="24"
              height="24"
              className="text-gray-50 w-[1.2rem] h-[1.2rem]  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            />
            <NavLink
              to="create-blog"
              className="text-gray-50 text-xs font-semibold  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            >
              EDIT POST
            </NavLink>
          </li>
          <li className="group flex flex-start items-center gap-2  hover:bg-gradient-to-r from-yellow-400 to-yellow-700 w-full px-4 py-2 transition-all duration-1000 ease-in-out">
            <Icon
              icon="material-symbols-light:rate-review-outline-sharp"
              width="24"
              height="24"
              className="text-gray-50 w-[1.2rem] h-[1.2rem]  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            />
            <NavLink
              to="reviews"
              className="text-gray-50 text-xs font-semibold  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            >
              REVIEWS
            </NavLink>
          </li>

          <li className="group flex flex-start items-center gap-2 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 w-full px-4 py-2 transition-all duration-1000 ease-in-out">
            <Icon
              icon="ant-design:setting-outlined"
              width="24"
              height="24"
              className="text-gray-50 w-[1.2rem] h-[1.2rem]  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            />
            <NavLink
              to="setting"
              className="text-gray-50 text-xs font-semibold  group-hover:text-gray-900 transition-all duration-500 ease-in-out"
            >
              SETTING
            </NavLink>
          </li>
        </ul>
      </aside>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
