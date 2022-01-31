import React, { useContext } from "react";
import cartIcon from "../../assets/icons/icon-cart-white.svg";
import { ItemContext } from "../item-provider/ItemProvider";

export default function AddToCartButton({ product, number, reset }) {
  const { itemsState } = useContext(ItemContext);
  const [items, setItems] = itemsState;

  const addItemToCart = () => {
    const itemIndex = items.findIndex((item) => {
      console.log(item.id, product.id);
      if (item.id === product.id) return true;
      return false;
    });
    let itemsCopy = [...items];
    if (itemIndex > -1) {
      itemsCopy[itemIndex].number += number;
    } else itemsCopy.push({ ...product, number: number });
    setItems(itemsCopy);
    reset();
  };

  return (
    <div
      className="w-full  lg:w-2/3 h-12 rounded-lg bg-orange flex items-center justify-center cursor-pointer"
      style={{
        boxShadow: "0px 20px 50px -20px #FF7E1B",
        color: "white",
      }}
      onClick={addItemToCart}
    >
      <div className="space-x-3 flex justify-center items-center">
        <img src={cartIcon} alt="cart icon" />
        <span className="font-bold">Add to cart</span>
      </div>
    </div>
  );
}
