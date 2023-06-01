import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  SetClearItemQTY,
  setCloseCart,
  setGetTotal,
} from "../app/CartSlice";
import CartCount from "./Cart/CartCount";
import CartEmpty from "./Cart/CartEmpty";
import CartItem from "./Cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  console.log(cartItems);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const ClearCart = () => {
    dispatch(SetClearItemQTY([]));
  };

  useEffect(() => {
    dispatch(setGetTotal());
  }, [cartItems, dispatch]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0 duration-500"
            : "opacity-0 invisible translate-x-8 duration-500"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount
            onCartToggle={onCartToggle}
            ClearCart={ClearCart}
            totalQTY={totalQTY}
          />

          {cartItems.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="gap-y-6 flex flex-col h-[81vh] scroll-smooth scroll-hidden overflow-y-scroll py-4">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="md:text-[16px] sm:text-[12px] xm:text-[12px] text-[8px] rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="md:text-[16px] sm:text-[12px] xm:text-[12px] text-[10px] font-medium text-center">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white sm:text-[16px] text-[13px]"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
