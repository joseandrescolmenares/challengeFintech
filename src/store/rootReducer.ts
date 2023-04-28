import FavoritesMovies from "@/pages/FavoritesMovieschallenge";
import * as types from "../store/types";
import { Movie } from "../utils/types";
import { RootState } from "../utils/types";

const initialState: RootState = {
  allMovies: [],
  movieDetails: [],
  movieFavorite: [],
  comment: [],
  loader: false,
};

function rootReducer(state: RootState = initialState, action: any) {
  switch (action.type) {
    case types.GET_MOVIES_ALL:
      return {
        ...state,
        allMovies: [...action.payload],
        loanding: false,
      };
    case types.SEARCH_MOVIE:
      const backingState = [...state.allMovies];
      const foundFilm = backingState.filter((movie: Movie) =>
        movie.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        allMovies: foundFilm,
        loanding: false,
      };
    case types.MOVIE_DETAILS:
      const details = [...state.allMovies];
      const resultMovi = details.filter(
        (movies: Movie) => movies.id == action.payload
      );
      return {
        ...state,
        movieDetails: [...resultMovi],
        loanding: false,
      };

    // En este caso, debido a restricciones de tiempo, no se implementó una base de datos para almacenar los comentarios, lo cual sería lo ideal en esta situación. En su lugar, se simuló una tabla en la que se guardan los comentarios de cada publicación utilizando el estado de Redux.
    case types.ADD_MOVIE_COMMENTARY:
      return {
        ...state,
        comment: [...state.comment, action.payload],
        loanding: false,
      };
    case types.SEARCH_COMMENT:
      const stateComment = [...state.comment];
      const result = stateComment.filter(
        (comment: Movie) => comment.id == action.payload
      );
      return {
        ...state,
        comment: result,
        loanding: false,
      };

    case types.ADD_FAVORITE_MOVIE:
      const stateFavorites = [...state.allMovies];
      const filterfavorites = stateFavorites.find(
        (movi: Movie) => movi.id == action.payload
      );
      const filmFound = state.movieFavorite.find((el) => el.id == action.payload);
      return {
        ...state,
        movieFavorite: filmFound 
          ? [...state.movieFavorite]
          : [...state.movieFavorite, filterfavorites],
        loanding: false,
      };

    case "LOADER":
      return {
        ...state,
        loanding: true,
      };
    default:
      return state;
  }
}

export default rootReducer;
