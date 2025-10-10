import { Icon } from "@iconify/react/dist/iconify.js";
import { addToCart } from "./../components/cartSlice";
import { useEffect, useState } from "react";
import {
  NavLink,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useGetCollectionQuery } from "../components/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

function ViewProduct() {
  const data = useOutletContext();
  const location = useLocation();

  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    if ((location.pathname = "/product")) {
      data.setIsSticky(false);
    }
  }, [location]);

  const { id } = useParams();
  const { data: productDetail } = useGetCollectionQuery(id);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const baseUrl = `https://res.cloudinary.com/djldlfhm1/image/upload`;

  const [color, setColor] = useState("");
  function handleChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="bg-gray-100 ">
      <div className="max-w-[70rem] mx-auto pt-2 pb-3 space-y-4">
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

        <div className="bg-gradient-to-t from-gray-100 to-gray-300 w-[90%] sm:w-[80%] mlg:w-[90%] mx-auto flex flex-col mlg:flex-row justify-between items-stretch gap-3 mlg:gap-0  shadow-2xl rounded-lg ">
          <div className="relative w-full flex justify-center items-center rounded-l-md ">
            {imgLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-gray-50">
                <Spinner />
              </div>
            )}
            <img
              src={`${baseUrl}/w_250,h_330,c_fill,g_auto,f_auto,q_auto/${productDetail?.getCollection?.design?.id}`}
              alt="product-image"
              className={`w-[100%] mlg:w-[60%] h-[25rem] sm:h-[35rem] mlg:h-full rounded-t-md mlg:rounded-none transition-opacity ${
                imgLoading ? "opacity-0" : "opacity-100"
              }`}
              loading="lazy"
              onLoad={() => setImgLoading(false)}
            />
          </div>
          <div className=" w-full px-4 sm:px-8 py-3 sm:py-5 mlg:py-7">
            <div className="flex justify-between items-center font-playfair w-[90%] xs:w-[80%] sm:w-[70%] mx-auto">
              <h2 className="font-bold text-xl sm:text-2xl text-gray-600 tracking-tight">
                {productDetail?.getCollection.name}
              </h2>
              <p className="font-bold text-gray-600 tracking-tight text-xl sm:text-2xl">
                ${productDetail?.getCollection.price}
              </p>
            </div>
            <p className="pt-[1rem] text-sm tracking-wide text-gray-700">
              {productDetail?.getCollection.comment}
            </p>
            <div className="w-full pt-4 flex justify-between items-center gap-4">
              <div className="w-[40%] space-y-2">
                <span className="text-sm font-bold text-gray-600">
                  Select Color :
                </span>
                <select
                  className={`w-full py-2 px-2 rounded-md focus:outline-none text-sm font-semibold bg-white text-gray-600 `}
                  onChange={handleChange}
                  name="color"
                  value={color}
                >
                  <option value="">Choose color</option>
                  {productDetail?.getCollection.colors.map(
                    (x, i) => (
                      <option
                        key={i}
                        value={x}
                        className="font-semibold"
                      >
                        {x}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="w-100 pt-4">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: productDetail?.getCollection._id,
                      name: productDetail?.getCollection
                        .name,
                      price:
                        productDetail?.getCollection.price,
                      color,
                      image:
                        productDetail?.getCollection.design
                          .url,
                    })
                  )
                }
                className="w-full bg-gradient-to-r from-yellow-400/60 to-yellow-800/80 text-gray-50 shadow-xl active:scale-95 py-2 rounded-lg text-sm font-bold"
              >
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
