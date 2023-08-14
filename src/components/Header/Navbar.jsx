import React, { useState } from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "./MenuIcon";

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  const navigationClass = isMenuActive
    ? `${styles.navigation} ${styles["navigation--mobile"]}`
    : `${styles.navigation} ${styles["navigation--mobile"]} ${styles["navigation--mobile--fadeout"]}`;

  return (
    <>
      <MenuIcon handleMenuClick={handleMenuClick} isMenuActive={isMenuActive} />

      <ul className={navigationClass}>
        <li>
          <a onClick={handleMenuClick} href="#home">
            Home
          </a>
        </li>
        <li>
          <a onClick={handleMenuClick} href="#about">
            About
          </a>
        </li>
        <li>
          <a onClick={handleMenuClick} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a onClick={handleMenuClick} href="#portfolio">
            Portfolio
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
