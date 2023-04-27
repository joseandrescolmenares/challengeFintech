import React from "react";

import { useDispatch } from "react-redux";
import style from "../styles/SearchBar.module.css";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleOnSubmit(e);
    } else if (e.key == "Enter") {
      e.preventDefault();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.containerInput}>
      <form onSubmit={handleOnSubmit}>
        <input className={style.input} type="text" onKeyDown={handleEnter} />
        <button className={style.button}>Buscar</button>
      </form>
    </div>
  );
};
