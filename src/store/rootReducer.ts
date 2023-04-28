import * as types from "../store/types";
interface RootState {
  allMovies: [];
  movieDetails: [];
  movieFavorite: [];
  comment: [];
  loader: boolean;
}

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
      const foundFilm = backingState.filter((movie) =>
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
        (movies) => movies.id == action.payload
      );
      return {
        ...state,
        movieDetails: [...resultMovi],
        loanding: false,
      };
    case types.ADD_MOVIE_COMMENTARY:
      return {
        ...state,
        comment: [...state.comment,action.payload],
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
