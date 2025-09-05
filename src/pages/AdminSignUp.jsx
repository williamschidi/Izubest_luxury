import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";

function AdminSignup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const format = (data) => {
        return data
          .trim()
          .replace(/\s+/, " ")
          .split(" ")
          .map(
            (d) =>
              d.slice(0, 1).toUpperCase() +
              d.slice(1).toLowerCase()
          )
          .join(" ");
      };

      const transformData = Object.fromEntries(
        Object.entries(formData).map(([key, val]) => {
          if (key === "fullname") return [key, format(val)];

          return [key, val.trim()];
        })
      );
      toast.success("Sign up successful");

      setFormData({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="px-4 w-full py-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[.2em] py-5 bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent">
        Welcome | Guest, Kindly sign up for an account.
      </p>
      <div className="max-w-[30rem]  sm:max-w-[40rem]  m-auto flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-3 shadow-2xl px-8 pt-8 pb-4 rounded-md bg-gradient-to-r from-yellow-600 to-yellow-800"
        >
          <div className="flex flex-col justify-start  items-start gap-2 md:flex-row md:justify-between md:items-center md:gap-4">
            <label
              htmlFor="fullname"
              className=" text-md md:text-sm  font-semibold text-gray-50"
            >
              FullName :
            </label>
            <input
              type="text"
              placeholder="Provide your fullname"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleOnChange}
              required
              className="w-[100%] md:w-[75%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div className="flex flex-col justify-start  items-start gap-2 md:flex-row md:justify-between md:items-center md:gap-4">
            <label
              htmlFor="email"
              className=" text-md md:text-sm  font-semibold text-gray-50"
            >
              Email Address :
            </label>
            <input
              type="email"
              placeholder="Provide your Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
              className="w-[100%] md:w-[75%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div className="flex flex-col justify-start  items-start gap-2 md:flex-row md:justify-between md:items-center md:gap-4">
            <label
              htmlFor="password"
              className="text-smd md:text-sm font-semibold text-gray-50"
            >
              Password :
            </label>
            <input
              type="password"
              placeholder="Provide your Password"
              name="password"
              id="password"
              value={formData.password}
              required
              onChange={handleOnChange}
              className="w-[100%] md:w-[75%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div className="flex flex-col justify-start  items-start gap-2 md:flex-row md:justify-between md:items-center md:gap-4">
            <label
              htmlFor="comfirm-password"
              className="text-smd md:text-sm font-semibold text-gray-50"
            >
              Confirm Password :
            </label>
            <input
              type="password"
              placeholder="Confirm your Password"
              name="confirmPassword"
              id="confirm-password"
              value={formData.confirmPassword}
              onChange={handleOnChange}
              required
              className="w-[100%] md:w-[75%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div>
            <Button>Sign up</Button>
            <p className="text-xs text-gray-200 text-center">
              Already has an account ? kindly &nbsp;
              <Link
                to="/login"
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
