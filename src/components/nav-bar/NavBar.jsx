import React, { useContext, useState } from "react";
import { ItemContext } from "../item-provider/ItemProvider";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";
import basketIcon from "../../assets/icons/icon-cart.svg";
import burgerIcon from "../../assets/icons/icon-menu.svg";
import styles from "./nav-bar-styles.module.scss";

export default function NavBar() {
  const menuOptions = ["Collections", "Men", "Women", "About", "Contact"];
  const { itemsState, cartState } = useContext(ItemContext);
  const [items, setItems] = itemsState;
  const [cartActive, setCartActive] = cartState;

  const itemCount = items.reduce((previousCount, currentItem) => {
    return previousCount + currentItem.number;
  }, 0);
  return (
    <nav
      className={`h-20 tablet:h-32 ${styles.navbar_container}  w-full fixed px-6 lg:px-0 bg-white flex justify-center z-20`}
    >
      <div className="flex items-center h-full justify-between w-full lg:w-10/12">
        <div className="flex items-baseline">
          <img src={burgerIcon} alt="" className="h-1/6 md:hidden pr-4" />
          <img src={logo} alt="" className="h-1/6 md:pr-12" />
          <div
            className="hidden md:flex space-x-2"
            style={{ color: "#69707D" }}
          >
            {menuOptions.map((menuOption) => (
              <p className="hover:text-black cursor-pointer">{menuOption}</p>
            ))}
          </div>
        </div>
        <div
          className={`${styles.interactive_section} flex h-full items-center`}
        >
          <div
            className="relative mr-6 cursor-pointer"
            onClick={() => setCartActive(!cartActive)}
          >
            <img src={basketIcon} alt="" className={`${styles.basket_image}`} />
            {itemCount > 0 && (
              <div className={`bg-orange ${styles.basket_count}`}>
                {itemCount}
              </div>
            )}
          </div>

          <img src={avatar} alt="avatar image" className="h-6 tablet:h-16" />
        </div>
      </div>
    </nav>
  );
}
