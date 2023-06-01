import { ChevronLeftSharp } from "@mui/icons-material";
import React from "react";
import { emptybag } from "../../assets";

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
      <div className="flex items-center h-screen justify-center flex-col gap-8">
        <img
          src={emptybag}
          alt="emptybag/img"
          className="md:w-[150px] w-[100px] h-auto transition-all duration-300 hover:scale-110 object-cover"
        />
        <button
          onClick={onCartToggle}
          className="flex items-center font-extrabold button-theme bg-orange-500 bg-gradient-to-b from-orange-600 to-orange-500 shadow-orange-500 shadow-lg"
        >
          <ChevronLeftSharp />
          <span>Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
