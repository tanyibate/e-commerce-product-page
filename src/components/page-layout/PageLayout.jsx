import React, { useContext } from "react";
import Cart from "../cart/Cart";
import { ItemContext } from "../item-provider/ItemProvider";

export default function PageLayout(props) {
  const { itemsState } = useContext(ItemContext);
  const [items] = itemsState;
  const { cartState } = useContext(ItemContext);
  const [cartActive] = cartState;

  return (
    <div className="relative w-full h-full lg:w-10/12 pt-20 tablet:pt-32 lg:flex lg:items-center">
      {props.children}
      {cartActive && <Cart items={items} />}
    </div>
  );
}
