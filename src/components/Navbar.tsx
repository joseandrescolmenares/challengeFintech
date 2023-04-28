import React from "react";
import Link from "next/link";

import { SearchBar } from "../components/SearchBar";
import style from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={style.containerNav}>
      <SearchBar />
      <ul className={style.ul}>
        <Link href='favoritesMovies'>
          <li className={style.li}>favorites</li>
        </Link>
      </ul>
    </div>
  );
};
