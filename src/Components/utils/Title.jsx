import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="grid items-center">
        <h1 className="sm:text-5xl text-2xl font-bold text-slate-900 filter drop-shadow-lg py-2 px-5">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
