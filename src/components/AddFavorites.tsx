import React from "react";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addFavorites } from "../store/actions";
import { Props } from "../utils/types";

export const AddFavorites = ({ id }: Props) => {
  const dispatch = useDispatch<Dispatch>();
 
  const handleOnclick = () => {
    dispatch(addFavorites(id));
  };

  return (
    <div>
      <button onClick={handleOnclick}>agragar a favorites</button>
    </div>
  );
};
