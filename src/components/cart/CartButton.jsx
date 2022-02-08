import React from "react";

export default function CartButton() {
  return (
    <div
      className="w-full h-12 rounded-lg bg-orange flex items-center justify-center cursor-pointer filter hover:brightness-125 font-bold"
      style={{
        boxShadow: "0px 20px 50px -20px #FF7E1B",
        color: "white",
      }}
    >
      Checkout
    </div>
  );
}
