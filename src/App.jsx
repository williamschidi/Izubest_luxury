import Index from "./pages/user/Index";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminIndex from "./pages/admin/AdminIndex";
import AdminSignup from "./pages/admin/AdminSignUp";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ViewProduct from "./pages/user/ViewProduct";
import Layout from "./pages/user/Layout";
import Cart from "./pages/user/Cart";
import CreateCollection from "./pages/admin/CreateCollection";
import CreateLatest from "./pages/admin/CreateLatest";
import { ToastContainer } from "react-toastify";
import EditCollection from "./pages/admin/EditCollection";
import GetCollections from "./pages/admin/GetCollections";
import EditLatest from "./pages/admin/EditLatest";
import ProtectMe from "./components/userComponents/ProtectMe";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      once: true,
      easing: "ease-in-out",
    });
    window.addEventListener("load", AOS.refresh);
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/product/:id"
              element={<ViewProduct />}
            />
          </Route>

          <Route path="admin" element={<AdminIndex />}>
            <Route index element={<AdminLogin />} />
            <Route path="login" element={<AdminLogin />} />
            <Route
              path="signup"
              element={<AdminSignup />}
            />
            <Route element={<ProtectMe />}>
              <Route
                path="dashboard"
                element={<AdminDashboard />}
              >
                <Route
                  index
                  element={<CreateCollection />}
                />
                <Route
                  path="create-collection"
                  element={<CreateCollection />}
                />
                <Route
                  path="get-collections"
                  element={<GetCollections />}
                />
                <Route
                  path="edit-collection/:id"
                  element={<EditCollection />}
                />
                <Route
                  path="create-latest"
                  element={<CreateLatest />}
                />
                <Route
                  path="edit-latest"
                  element={<EditLatest />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
