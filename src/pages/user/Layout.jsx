import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/userComponents/Header";

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
    <div className="overflow-x-hidden">
      <Header data={data} />
      <Outlet context={data} />
    </div>
  );
}

export default Layout;
