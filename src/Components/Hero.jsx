import React from "react";
import Clips from "../Components/utils/Clips";
import Socials from "./utils/Socials";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col bg-theme bg-rounded">
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="sm:text-[38px] text-[20px] font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            <h1 className="sm:text-[38px] text-[20px] font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>
            <a href="#explore">
              <button
                type="button"
                className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5 xm:text-[16px] text-[10px]"
              >
                {btntext}
              </button>
            </a>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[1%] xl:left-0 w-auto h-auto">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.Clip} />
              ))}
            </div>
            <div className="grid items-center absolute right-0 sm:top-[15rem] top-[9rem]">
              {sociallinks.map((val, index) => (
                <Socials key={index} icon={val.icon} />
              ))}
            </div>
          </div>
          <div>
            <img
              src={img}
              alt="hero-img/img"
              className="transitions-theme h-[100%] w-[80%] m-auto -rotate-[25deg] hover:rotate-0 cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
