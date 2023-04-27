import * as types from "../store/types";
interface RootState {
  allMovies: [];
  movieDetails: [];
  movieFavorite: [];
  loader: boolean;
}

const initialState: RootState = {
  allMovies: [],
  movieDetails: [],
  movieFavorite: [],
  loader: false,
};

function rootReducer(state: RootState = initialState, action: any) {
  switch (action.type) {
    // Define tus casos de acciones aquí
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
