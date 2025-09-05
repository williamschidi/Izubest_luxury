import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function ViewProduct() {
  const [data, setData] = useState({
    color: "",
    qty: 2,
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleDec() {
    if (data.qty === 1) return;
    setData((prev) => ({
      ...prev,
      qty: prev.qty--,
    }));
  }

  function handleInc() {
    setData((prev) => ({
      ...prev,
      qty: prev.qty++,
    }));
  }

  return (
    <div className="bg-gray-100 ">
      <div className="max-w-[70rem] mx-auto pt-4 pb-3 space-y-4">
        <nav className="space-x-2 px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-semibold  ${
                isActive
                  ? "bg-gradient-to-r from-yellow-700 to-yellow-900 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"
              }`
            }
          >
            Home
          </NavLink>
          <span className="text-sm font-semibold bg-gradient-to-tr from-yellow-400 to-yellow-700 text-transparent bg-clip-text">
            /
          </span>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-sm font-semibold  ${
                isActive
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-900 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-yellow-400 to-yellow-700 text-transparent bg-clip-text"
              }`
            }
          >
            Product
          </NavLink>
        </nav>

        <div className=" w-[80%] mlg:w-[90%] mx-auto flex flex-col mlg:flex-row justify-between items-stretch gap-3 mlg:gap-0  shadow-2xl rounded-md">
          <div className="w-full flex justify-center items-center bg-gray-200 rounded-l-md">
            <img
              src="/wear-img/img2.jpg"
              alt="product-image"
              className=" w-[90%] mlg:w-[60%] max-h-[35rem] "
            />
          </div>
          <div className=" w-full px-8 py-3">
            <div className="flex justify-between items-center font-playfair w-[90%] xs:w-[80%] sm:w-[70%] mx-auto">
              <h2 className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-yellow-700 to-yellow-900 text-transparent bg-clip-text tracking-tight">
                Classic Tencel
              </h2>
              <p className="font-bold bg-gradient-to-r from-yellow-700 to-yellow-900 text-transparent bg-clip-text text-xl sm:text-2xl">
                $150
              </p>
            </div>
            <p className="pt-[1rem] tracking-wide text-gray-700">
              Tencel is the fabric that feels like luxury
              and breathes like nature. Made from
              sustainably sourced wood pulp, it's silky
              soft, gentle on the skin, and eco-friendly.
              With its natural ability to keep you cool,
              fresh, and comfortable, Tencel combines
              elegance with sustainability—making every
              outfit not just stylish, but smart. Perfect
              for those who want fashion that cares for both
              you and the planet.
            </p>
            <div className="w-full pt-4 flex justify-between items-center gap-4">
              <div className="w-[40%] space-y-2">
                <span className="text-sm font-bold text-gray-600">
                  Select Color :
                </span>
                <select
                  style={{ backgroundColor: data.color }}
                  className={`w-full py-2 px-2 rounded-md focus:outline-none text-sm font-semibold text-gray-600 `}
                  onChange={handleChange}
                  name="color"
                  value={data.color}
                >
                  <option value="">Choose color</option>
                  <option
                    value="red"
                    className="font-semibold"
                  >
                    RED
                  </option>
                  <option
                    value="Black"
                    className="font-semibold"
                  >
                    BLACK
                  </option>
                  <option
                    value="green"
                    className="font-semibold"
                  >
                    GREEN
                  </option>
                  <option
                    value="blue"
                    className="font-semibold"
                  >
                    BLUE
                  </option>
                </select>
              </div>

              <div className="w-[50%] space-y-2">
                <span className="text-gray-600 text-sm font-bold">
                  QTY :
                </span>

                <div className="flex justify-between items-center w-[80%] bg-white  rounded-md">
                  <button
                    className="text-gray-700 px-3 py-2"
                    onClick={handleDec}
                  >
                    <Icon
                      icon="line-md:minus"
                      width="24"
                      height="24"
                      className="w-[1rem] h-[1rem]"
                    />
                  </button>
                  <span
                    className="text-gray-600 font-semibold text-md"
                    id="qty"
                  >
                    {data.qty}
                  </span>
                  <button
                    className="text-gray-700 px-3 py-2"
                    onClick={handleInc}
                  >
                    <Icon
                      icon="line-md:plus"
                      width="24"
                      height="24"
                      className="w-[1rem] h-[1rem]"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-100 pt-4 rounded-md">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-800 text-gray-50 shadow-xl active:scale-95 py-2 rounded-md text-sm font-bold">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
