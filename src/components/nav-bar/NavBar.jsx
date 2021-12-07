import React from "react";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";
import basketIcon from "../../assets/icons/icon-cart.svg";
import burgerIcon from "../../assets/icons/icon-menu.svg";
import styles from "./nav-bar-styles.module.scss";

export default function NavBar() {
  return (
    <div className={`h-32 ${styles.navbar_container}`}>
      <div className="flex items-center h-full justify-between">
        <div className="flex items-baseline">
          <img src={burgerIcon} alt="" className="h-1/6 md:hidden" />
          <img src={logo} alt="" className="h-1/6 md:pr-12" />
          <div className="hidden md:flex">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div
          className={`${styles.interactive_section} flex h-full items-center`}
        >
          <img src={basketIcon} alt="" className={styles.basket_image} />
          <img src={avatar} alt="" className="h-16" />
        </div>
      </div>
    </div>
  );
}
