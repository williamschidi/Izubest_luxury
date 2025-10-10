import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../components/cartSlice";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleDec() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  function handleInc() {
    setQuantity((prev) => prev + 1);
  }
  return (
    <div className="max-w-[70rem] mx-auto py-[1rem] sm:py-[2rem]">
      <p className="text-center  tracking-wide text-xl font-semibold text-gray-600 pb-[1rem] sm:pb-[2rem]">
        Your Cart
      </p>
      {cart?.items.length === 0 ? (
        <p className="text-lg capitalize font-semibold text-center text-gray-700">
          Your cart is empty, please add items to cart
        </p>
      ) : (
        <div className="flex flex-col mlg:flex-row justify-between items-start gap-16 mlg:gap-8  px-2 sm:px-8 lg:px-2">
          <div className="w-full sm:w-[90%] mlg:w-[60%] mx-auto mlg:mx-0 border border-gray-100 rounded-md space-y-2 sm:space-y-3 pb-[4rem] mlg:pb-0">
            <div className="rounded-t-md capitalize text-xs sm:text-sm font-bold text-gray-700 tracking-wide flex justify-between items-center gap-3 bg-gradient-to-t from-gray-100 to-gray-200 px-2 sm:px-4 py-2">
              <div className="flex-[1.5] text-center">
                item
              </div>
              <div className="flex-1 text-center">
                color
              </div>
              <div className="flex-1 text-center">
                price
              </div>
              <div className="flex-[1.5] text-center">
                QTY
              </div>
              <div className="flex-1 text-center">
                total
              </div>
              <div className="flex-1 text-center">
                delete
              </div>
            </div>
            {cart.items.map((x) => (
              <div
                key={x.id}
                className="flex justify-between gap-2 px-0 sm:px-4 py-2 text-sm font-semibold items-center hover:bg-gradient-to-tr from-gray-50 to-gray-100"
              >
                <div className="flex-1 sm:flex-[1.5] inline-flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1 sm:gap-3">
                  <div className="w-[2rem] sm:w-[2.4rem] h-[2rem] sm:h-[2.4rem]">
                    <img
                      src={x?.image}
                      alt="product-image"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <span>{x?.name}</span>
                </div>
                <div className="flex-1 text-center">
                  {x.color}
                </div>
                <div className="flex-1 text-center">
                  ${x.price}
                </div>
                <div className="flex-[1.5] flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 pr-2">
                  <button
                    className="text-gray-700 py-2"
                    onClick={() =>
                      dispatch(decreaseQuantity(x.id))
                    }
                  >
                    <Icon
                      icon="line-md:minus"
                      width="24"
                      height="24"
                      className="w-[1.2rem] sm:w-[1rem] h-[1.2rem] sm:h-[1rem]"
                    />
                  </button>
                  <span>{x.quantity}</span>
                  <button
                    className="text-gray-700 py-2"
                    onClick={() =>
                      dispatch(increaseQuantity(x.id))
                    }
                  >
                    <Icon
                      icon="line-md:plus"
                      width="24"
                      height="24"
                      className="w-[1.2rem] sm:w-[1rem] h-[1.2rem] sm:h-[1rem]"
                    />
                  </button>
                </div>
                <div className="flex-1 text-center">
                  ${x.quantity * x.price}
                </div>
                <button
                  className="flex-1 flex justify-center item-center hover:text-gray-600"
                  onClick={() => dispatch(deleteItem(x.id))}
                >
                  <Icon
                    icon="uiw:delete"
                    width="20"
                    height="20"
                  />
                </button>
              </div>
            ))}
          </div>

          <div className=" w-full sm:w-[90%] mlg:w-[40%] mx-auto mlg:mx-0 border border-gray-100 rounded-md  space-y-4 pb-[2rem]">
            <div className="bg-gradient-to-t from-gray-100 to-gray-200 rounded-t-md">
              <p className=" text-center py-2 uppercase text-sm font-bold">
                order summary
              </p>
            </div>

            <dl>
              <div className="flex justify-between items center px-4 py-1">
                <dt className="text-gray-600 text-sm font-medium">
                  Subtotal
                </dt>
                <dd className="text-gray-800 font-semibold text-sm">
                  ${cart.totalAmount}
                </dd>
              </div>
              <div className="flex justify-between items center px-4 py-1">
                <dt className="text-gray-600 text-sm font-medium">
                  Shipping
                </dt>
                <dd className="text-gray-800 font-semibold text-sm">
                  ${cart.shipping}
                </dd>
              </div>
              <div className="flex justify-between items center px-4 py-1">
                <dt className="text-gray-800 text-sm font-semibold">
                  Total
                </dt>
                <dd className="text-gray-800 font-bold text-sm">
                  ${cart.totalAmount + cart.shipping}
                </dd>
              </div>
            </dl>
            <p className="text-center text-sm font-semibold text-gray-600 px-4 py-2">
              Final shipping cost and taxes are calculated
              at checkout
            </p>
            <div className="w-[80%] mx-auto">
              <button className="active:scale-95 hover:bg-gradient-to-t from-orange-600 to-red-600 transition block text-center w-[100%] bg-red-600 text-gray-50 rounded-full py-1 text-sm font-semibold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
