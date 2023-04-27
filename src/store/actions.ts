import axios from "axios";
import { Dispatch } from "redux";
import * as types from "../store/types";

export function getAllMovies() {
  return async function (dispatch: Dispatch) {
    dispatch(loader());
    try {
      const resultado = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_APY_KEY}`
      );
      return dispatch({
        type: types.GET_MOVIES_ALL,
        payload: resultado.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function SearchMovie(title: string) {
console.log(title)
  return async function (dispatch: Dispatch) {
    return dispatch({
      type: types.SEARCH_MOVIE,
      payload: id,
    });
  };
}

export function addCommnetary(commentary: string) {
  return async function (dispatch: Dispatch) {
    try {
      const data = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: "GET_TYPES",
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function loader() {
  return {
    type: "LOADER",
  };
}
