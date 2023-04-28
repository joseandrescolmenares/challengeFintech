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
  return async function (dispatch: Dispatch) {
    return dispatch({
      type: types.SEARCH_MOVIE,
      payload: title,
    });
  };
}

export function addCommnetary(commentary: string, id: number) {
  return async function (dispatch: Dispatch) {
    return dispatch({
      type: types.ADD_MOVIE_COMMENTARY,
      payload: { commentary, id },
    });
  };
}

export function searchComment(id: number) {
  return async function (dispatch: Dispatch) {
    return dispatch({
      type: types.SEARCH_COMMENT,
      payload: id,
    });
  };
}

export function addFavorites(id: number) {
  return async function (dispatch: Dispatch) {
    return dispatch({
      type: types.ADD_FAVORITE_MOVIE,
      payload: id,
    });
  };
}

export function details(id: number) {
  return async function (dispatch: Dispatch) {
    dispatch(searchComment(id));
    dispatch(getAllMovies());
    return dispatch({
      type: types.MOVIE_DETAILS,
      payload: id,
    });
  };
}

export function loader() {
  return {
    type: "LOADER",
  };
}
