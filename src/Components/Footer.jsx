import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ footerAPI }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="flex flex-wrap justify-evenly  gap-10">
            {footerAPI.map((val) => (
              <div key={val}>
                <h1 className="font-extrabold md:text-[20px] py-4">
                  {val.title}
                </h1>

                <ul>
                  {val.links.map((list) => (
                    <li
                      className={`${
                        val !== list.length - 1 ? "mb-4" : "mb-0"
                      } text-[17px]`}
                      key={list}
                    >
                      <Link to={list.to}>{list.link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright <sup className="text-base font-bold">C</sup> All Right
              Reserved 2023-2024
            </p>
            <a href="#top">
              <span className="font-bold">Pøsh-cødę</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
