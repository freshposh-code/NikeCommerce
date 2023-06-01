import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockCircleFilled, HeartFilled } from "@ant-design/icons";
import { NewReleases } from "@mui/icons-material";
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="">
                    <img
                      src={val.img}
                      alt={`img/story/${i}`}
                      className="h-auto w-full shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                    />
                    <div className="flex items-center justify-between w-full px-4">
                      <div className="flex items-center gap-0.5">
                        <HeartFilled className="icon-style text-red-500" />
                        <span className="font-extrabold md:text-[13px] xs:text-[12px]  xm:text-[10px] text-[6px]">
                          {val.like}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <ClockCircleFilled className="icon-style text-gray-500" />
                        <span className="font-extrabold md:text-[13px] xs:text-[12px] xm:text-[10px] text-[6px]">
                          {val.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <NewReleases
                          fontSize="10px"
                          className="icon-style text-blue-500"
                        />
                        <span className="text-blue-500 font-extrabold md:text-[13px] xs:text-[12px] xm:text-[10px] text-[6px]">
                          {val.by}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold">{val.title}</h1>
                    <p className="xm:text-[16px] text-[10px]">
                      {truncate(val.text, { length: 175 })}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-slate-100 text-center py-2 button-theme"
                      href={val.url}
                      target="_blank"
                      rel="noreferrer"
                      role={"button"}
                    >
                      {val.btn}
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
