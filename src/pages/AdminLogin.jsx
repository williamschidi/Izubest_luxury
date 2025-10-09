import { useState } from "react";
import {
  Link,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

import { toast } from "react-toastify";
import Button from "../components/Button";

function AdminLogin() {
  const { isAuth, setIsAuth } = useOutletContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const cleanData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          key,
          value.trim(),
        ])
      );
      toast.success("login successful");
    } catch (err) {
      toast.error(err.message);
    }

    setFormData({ email: "", password: "" });
    setIsAuth(true);
    navigate("/admin/dashboard");
  }

  return (
    <div className="px-4 w-full py-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[.2em] py-5 bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent">
        Welcome | Guest, Kindly log in.
      </p>
      <div className="max-w-[30rem] sm:max-w-[40rem] m-auto  flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-5 shadow-2xl px-8 pt-12 pb-2 rounded-md bg-gradient-to-tr from-yellow-600/60 to-yellow-800/60"
        >
          <div className="flex flex-col justify-start  items-start gap-2 md:flex-row md:justify-between md:items-center md:gap-4">
            <label
              htmlFor="email"
              className=" text-sm font-semibold text-gray-50"
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
              className="w-[100%] md:w-[80%] text-xs py-2 px-4 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div className="flex flex-col justify-start  items-start gap-2 md:flex-row md:justify-between md:items-center md:gap-4">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-50"
            >
              Password :
            </label>
            <input
              type="password"
              placeholder="Provide your Password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleOnChange}
              required
              className="w-[100%] md:w-[80%] text-xs py-2 px-4 rounded-md border border-yellow-600  focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div>
            <Button>Login</Button>
            <p className="text-xs text-gray-200 text-center pt-3">
              Don't have an account ? Please&nbsp;
              <Link
                to="/admin/sign-up"
                className="text-sm font-semibold text-yellow-800"
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
