import React from "react";

const FlexContent = ({
  ifExist,
  endpoint: { title, text, heading, img, url, btn },
}) => {
  console.log(ifExist);
  return (
    <>
      <div
        className={`flex items-center justify-between nike-container gap-5 md:flex-row flex-col ${
          ifExist ? "md:flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="max-w-lg w-full">
          <h1 className="sm:text-[30px] text-[20px] text-gradient font-extrabold">
            {heading}
          </h1>
          <h1 className="drop-shadow-lg filter text-slate-900 sm:text-5xl text-2xl font-bold ">
            {title}
          </h1>
          <p>{text}</p>
          <a href={url}>
            <button
              type="button"
              className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-2 my-4"
            >
              {btn}
            </button>
          </a>
        </div>
        <div>
          <img
            src={img}
            alt={`img/${heading}`}
            className={`transitions-theme rotate-6  hover:-rotate-12 duration-500 transition-all ease-in-out h-[100%] w-[80%] m-auto object-contain`}
          />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
