import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="#home">
            <h1>Shu<span>bham</span></h1>
          </a>
        </div>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
