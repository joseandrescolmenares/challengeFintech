import React,{useRef} from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { SearchMovie } from "../store/actions";
import style from "../styles/SearchBar.module.css";

export const SearchBar = () => {
  const inputSearch = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<Dispatch>();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleOnSubmit(e);
    } else if (e.key == "Enter") {
      e.preventDefault();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(inputSearch.current.value === ""){
      return
    }
    console.log(inputSearch.current?.value)
    dispatch(SearchMovie(inputSearch.current?.value))
    inputSearch.current.value = ""
  };

  return (
    <div className={style.containerInput}>
      <form className={style.form} onSubmit={handleOnSubmit}>
        <input className={style.input} type="text" placeholder="search..." onKeyDown={handleEnter} ref={inputSearch} />
        <button className={style.button}>Buscar</button>
      </form>
    </div>
  );
};
