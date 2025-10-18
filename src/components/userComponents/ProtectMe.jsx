import { Navigate, Outlet } from "react-router-dom";
import { useGetMeQuery } from "./../feature/apiFeatures/apiSlice";
import Spinner from "./Spinner";

function ProtectMe() {
  const {
    data: user,
    isLoading,
    isError,
  } = useGetMeQuery();

  if (isLoading)
    return (
      <div className="relative w-full h-screen">
        <Spinner />
      </div>
    );
  if (isError && !user) {
    return <Navigate to="/admin/login" replace />;
  }
  return <Outlet />;
}

export default ProtectMe;
