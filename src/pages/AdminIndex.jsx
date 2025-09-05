import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
// import Login from "./AdminLogin";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function AdminIndex() {
  const [isAuth, setIsAuth] = useState(false);
  const data = { isAuth, setIsAuth };

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <div className="flex-grow bg-gray-100 flex">
        <Outlet context={data} />
      </div>

      <Footer />
    </div>
  );
}

export default AdminIndex;
