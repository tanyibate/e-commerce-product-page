import React from "react";
import CartButton from "./CartButton";
import CartProduct from "./CartProduct";

export default function Cart({ items }) {
  return (
    <div className="w-11/12 md:w-80 min-h-64 h-64  shadow-2xl rounded-lg divide-y divide-gray absolute  tablet:right-0 top-24 tablet:top-28 z-30 bg-white animate-appear">
      <div className="h-1/5 flex justify-start items-center px-6">
        <p className="font-bold">Cart</p>
      </div>
      <div className="h-4/5 py-7 px-6">
        {items.length ? (
          <>
            <div className="space-y-8 mb-7">
              {items.map((item) => (
                <CartProduct item={item} />
              ))}
            </div>

            <CartButton />
          </>
        ) : (
          <span className="text-center">Your cart is empty</span>
        )}
      </div>
    </div>
  );
}
