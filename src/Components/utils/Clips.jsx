import React from "react";

const Clips = ({ imgsrc }) => {
  return (
    <div className="relative sm:h-[6rem] h-[1.5rem] sm:w-[6rem] w-[3rem] cursor-pointer rounded-xl">
      <img src={imgsrc} alt="img/clips" className="rounded-xl" />
    </div>
  );
};

export default Clips;
