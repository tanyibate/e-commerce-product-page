import React from "react";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";
import basketIcon from "../../assets/icons/icon-cart.svg";
import burgerIcon from "../../assets/icons/icon-menu.svg";
import styles from "./nav-bar-styles.module.scss";

export default function NavBar() {
  return (
    <nav
      className={`h-20 tablet:h-32 ${styles.navbar_container}  w-full fixed px-6 tablet:px-0 bg-white flex justify-center`}
    >
      <div className="flex items-center h-full justify-between w-full lg:w-10/12">
        <div className="flex items-baseline">
          <img src={burgerIcon} alt="" className="h-1/6 md:hidden pr-4" />
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
          <img
            src={basketIcon}
            alt=""
            className={`${styles.basket_image} pr-6`}
          />
          <img src={avatar} alt="" className="h-6 tablet:h-16" />
        </div>
      </div>
    </nav>
  );
}
