import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div>
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center md:p-4 p-0 ${
            ifExists
              ? "md:grid-cols-3 xs:grid-cols-2 px-3 grid-cols-1 gap-10"
              : "md:grid-cols-4 xs:grid-cols-2 px-3 grid-cols-1 gap-10"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
