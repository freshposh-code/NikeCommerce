import React from "react";

const Socials = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon"
        className="sm:w-[20px] w-[13px] sm:py-2 py-1 cursor-pointer transition-all duration-200 hover:scale-110"
      />
    </>
  );
};

export default Socials;
