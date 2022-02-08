import React, { useContext } from "react";
import trashIcon from "../../assets/icons/icon-delete.svg";
import { ItemContext } from "../item-provider/ItemProvider";

export default function CartProduct({ item }) {
  const { itemsState } = useContext(ItemContext);
  const [items, setItems] = itemsState;
  const removeItem = (name) => {
    const oldItems = [...items];
    const positionOfItem = oldItems.find((item) => item.name === name);
    oldItems.splice(positionOfItem, 1);
    setItems(oldItems);
  };
  return (
    <div className="flex justify-between text-sm text-lightBlack items-center">
      <img
        src={item.image}
        alt="product image"
        className="rounded-md h-12 w-12"
      />
      <div>
        <p className="text-sm">{item.name}</p>
        <p className="text-left">
          {item.price * item.discount}&nbsp; x &nbsp;{item.number}
          &nbsp;&nbsp;
          <span className="font-bold text-black">
            ${item.price * item.discount * item.number}
          </span>
        </p>
      </div>
      <img
        src={trashIcon}
        alt="trash icon"
        className="h-4 w-4 cursor-pointer"
        onClick={() => removeItem(item.name)}
      />
    </div>
  );
}
