import React from "react";

import { SearchBar } from "../components/SearchBar";
import style from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={style.containerNav}>
      <SearchBar />
      <ul className={style.ul}>
        <li>favorites</li>
      </ul>
    </div>
  );
};
