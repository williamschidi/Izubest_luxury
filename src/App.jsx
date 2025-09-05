import Index from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminIndex from "./pages/AdminIndex";
import AdminSignup from "./pages/AdminSignUp";
import AdminDashboard from "./pages/AdminDashboard";
import ViewProduct from "./pages/ViewProduct";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route
          path="/product/:id"
          element={<ViewProduct />}
        />
      </Route>

      <Route path="admin" element={<AdminIndex />}>
        <Route path="login" element={<AdminLogin />} />
        <Route path="sign-up" element={<AdminSignup />} />
        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />
      </Route>
    </Routes>
  );
}

export default App;
