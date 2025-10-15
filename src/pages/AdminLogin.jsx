import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Button from "../components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAdminLoginMutation } from "../components/feature/apiFeatures/apiSlice";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useAdminLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const cleanData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          key,
          value.trim(),
        ])
      );
      await login(cleanData).unwrap();
      toast.success("login successful");

      navigate("/admin/dashboard");
    } catch (err) {
      toast.error(err.data.message);
    }

    setFormData({ email: "", password: "" });
  }

  return (
    <div className="px-4 w-full py-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[.2em] py-5 bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent">
        Welcome | Guest, Kindly log in.
      </p>
      <div className="max-w-[30rem] sm:max-w-[40rem] m-auto  flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-5 shadow-2xl px-8 pt-12 pb-2 rounded-md bg-gradient-to-tr from-yellow-600 to-yellow-800"
        >
          <div className="w-full">
            <input
              type="email"
              placeholder="Provide your Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
              className="w-full text-xs py-2 px-4 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Provide your Password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleOnChange}
              required
              className="w-full text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
            >
              {showPassword ? (
                <Icon
                  icon="tabler:eye"
                  width="24"
                  height="24"
                  className="w-[1.2rem] h-[1.2rem] text-gray-500"
                />
              ) : (
                <Icon
                  icon="basil:eye-closed-outline"
                  width="24"
                  height="24"
                  className="w-[1.2rem] h-[1.2rem] text-gray-500"
                />
              )}
            </button>
          </div>
          <div>
            <Button>Login</Button>
            <p className="text-xs text-gray-200 text-center pt-3">
              Don't have an account ? Please&nbsp;
              <Link
                to="/admin/sign-up"
                className="text-sm font-semibold text-yellow-400"
              >
                sign up
              </Link>
              &nbsp;for an account
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
