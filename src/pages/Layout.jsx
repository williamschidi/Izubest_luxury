import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  const [collections, setCollections] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const data = {
    setCollections,
    collections,
    isSticky,
    setIsSticky,
  };
  return (
    <div>
      <Header data={data} />
      <Outlet />
    </div>
  );
}

export default Layout;
