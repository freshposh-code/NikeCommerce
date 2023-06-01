import { DeleteFilled } from "@ant-design/icons";
// import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemToCart,
} from "../../app/CartSlice";
// import { db } from "../../firebase";
// import { UserAuth } from "../Context/AuthContext";

const CartItem = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispath = useDispatch();

  const onRemoveItem = () => {
    dispath(
      setRemoveItemToCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispath(
      setIncreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispath(
      setDecreaseItemQTY({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  // const { user } = UserAuth();

  // useEffect(() => {
  //   onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
  //     setCart(doc.data()?.savedCart);
  //   });
  // }, [user?.email]);

  // const Cartid = doc(db, "users", `${user?.email}`);
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div
            className={`
          bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-700 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item`}
              className="md:w-36 sm:w-28 xm:w-28 w-20  h-auto object-fill"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black sm:text-[13px] text-[9px] px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium md:text-[16px] sm:text-[15px] xm:text-[15px] text-[10px] text-slate-900">
                {title}
              </h1>
              <p className="md:text-[16px] sm:text-[13px] xm:text-[13px] text-[9px] text-slate-700">
                {text}
              </p>
            </div>
            <div className="flex items-center px-5 gap-5 w-full">
              <button
                type="button"
                className=" text-[#000] font-extrabold rounded-sm"
                onClick={onDecreaseItemQTY}
              >
                -
              </button>
              <div className=" text-[#000] font-extrabold rounded-sm sm:text-[16px] text-[12px]">
                {cartQuantity}
              </div>
              <button
                type="button"
                className=" text-[#000] font-extrabold rounded-sm text-[15px]"
                onClick={onIncreaseItemQTY}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div>
            <h1 className="md:text-[15px] text-[10px]">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="">
            <button
              type="button"
              className="cursor-pointer"
              onClick={onRemoveItem}
            >
              <DeleteFilled className="md:text-md text-sm" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
