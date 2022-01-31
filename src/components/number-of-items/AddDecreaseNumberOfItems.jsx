import React from "react";

import iconMinus from "../../assets/icons/icon-minus.svg";
import iconPlus from "../../assets/icons/icon-plus.svg";

export default function AddDecreaseNumberOfItems({ count, dispatch }) {
  return (
    <div
      className="flex justify-between px-2 items-center w-full h-12 rounded-lg lg:w-1/3"
      style={{ backgroundColor: "#f6f8fd" }}
    >
      <img
        src={iconMinus}
        alt=""
        className="h-1 w-4 cursor-pointer"
        onClick={() => {
          if (count) {
            dispatch({ type: "decrement" });
          }
        }}
      />
      <span>{count}</span>
      <img
        src={iconPlus}
        alt=""
        className="h-4 w-4 cursor-pointer"
        onClick={() => dispatch({ type: "increment" })}
      />
    </div>
  );
}
