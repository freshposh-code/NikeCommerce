import { ShoppingBag, Star } from "@mui/icons-material";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { db } from "../../firebase";
import { UserAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const handleCart2 = () => {
    if (user?.email) {
      const item = {
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
      };
      dispatch(setAddItemToCart(item));
    }
  };

  const onCartToggle = () => {
    if (user?.email) {
      dispatch(
        setOpenCart({
          cartState: true,
        })
      );
    } else {
      toast.error(`Account needed to purchase`);
    }
  };
  const { user } = UserAuth();
  const Cartid = doc(db, "users", `${user?.email}`);
  const [ , setSaved] = useState(false);

  const handleCart = async () => {
    if (user?.email) {
      setSaved(true);
      await updateDoc(Cartid, {
        savedCart: arrayUnion({
          id: 1,
          title: title,
          text: text,
          img: img,
        }),
      });
    } else {
      toast.error(`Please Signup to add to cart`);
    }
  };

  return (
    <>
      <div
        id="explore"
        className={`relative bg-gradient-to-b ${color} ${shadow}  grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 cursor-pointer w-full h-scale`}
      >
        <div className="grid items-star">
          <h1 className="text-slate-200 py-1">{title}</h1>
          <p className="text-slate-200">{text}</p>
          <div className="flex items-center justify-between w-28">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h1 className="text-black text-sm blur-effect-theme z-50">
                ${price}
              </h1>
            </div>
            <div className="flex items-center gap-1 py-2">
              <Star className="icon-style text-white" />
              <h1 className="text-slate-100">{rating}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 z-50">
            <button
              onClick={() => {
                handleCart2();
                handleCart();
              }}
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme p-0.5"
            >
              <ShoppingBag className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white text-black px-2 py-1 shadow shadow-sky-200 opacity-90 blur-effect-theme button-theme p-0.5"
              onClick={() => {
                handleCart2();
                onCartToggle();
                handleCart();
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        <div>
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className="transitions-theme hover:-rotate-12 duration-150 w-[100%] h-[170px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Item;
