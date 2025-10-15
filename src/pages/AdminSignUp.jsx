import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { useAdminSignupMutation } from "../components/feature/apiFeatures/apiSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

function AdminSignup() {
  const [signup] = useAdminSignupMutation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const navigate = useNavigate();

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const format = (data) => {
        let transformData = data.trim();

        return (
          transformData.slice(0, 1).toUpperCase() +
          transformData.slice(1).toLowerCase()
        );
      };
      const transformData = Object.fromEntries(
        Object.entries(formData).map(([key, val]) => {
          if (key === "firstName" || key === "lastName") {
            return [key, format(val)];
          }

          return [key, val];
        })
      );
      await signup(transformData).unwrap();

      toast.success("Sign up successful");

      navigate("/admin/dashboard");
    } catch (err) {
      toast.error(err.data.message);
    }
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="px-4 min-h-full w-full pt-6 pb-4">
      <p className="text-center text-sm font-semibold uppercase tracking-[.2em] py-5 bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent">
        Welcome | Guest, Kindly sign up for an account.
      </p>
      <div className="max-w-[30rem]  sm:max-w-[40rem]  m-auto flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-1 shadow-2xl px-8 pt-8 pb-4 rounded-md bg-gradient-to-r from-yellow-600 to-yellow-800"
        >
          <div className="flex justify-between items-center gap-1">
            <input
              type="text"
              placeholder="Provide your first name"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              required
              className="w-[100%] md:w-[75%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />

            <input
              type="text"
              placeholder="Provide your last name"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
              required
              className="w-[100%] md:w-[75%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>

          <div className="w-full">
            <input
              type="email"
              placeholder="Provide your Email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
              className="w-[100%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Provide your Password"
              name="password"
              value={formData.password}
              required
              onChange={handleOnChange}
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
          <div className="relative w-full">
            <input
              type={
                showConfirmPassword ? "text" : "password"
              }
              placeholder="Confirm your Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleOnChange}
              required
              className="w-full text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2"
              onClick={() =>
                setShowConfirmPassword((prev) => !prev)
              }
            >
              {showConfirmPassword ? (
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
          <div className="pt-4 space-y-2">
            <Button>Sign up</Button>
            <p className="text-xs text-gray-200 text-center">
              Already has an account ? kindly &nbsp;
              <Link
                to="/admin/login"
                className="text-sm font-semibold text-yellow-400"
              >
                login
              </Link>
              &nbsp;to create an account
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminSignup;
