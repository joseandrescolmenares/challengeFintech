import React from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addFavorites } from "../store/actions";
import { Props } from "../utils/types";
import style from "../styles/addFavorites.module.css"

export const AddFavorites = ({ id }: Props) => {
  const dispatch = useDispatch<Dispatch>();
 
  const handleOnclick = () => {
    dispatch(addFavorites(id));
  };

  return (
    <div className={style.conainer}>
      <button className={style.button} onClick={handleOnclick}>favorites</button>
    </div>
  );
};
