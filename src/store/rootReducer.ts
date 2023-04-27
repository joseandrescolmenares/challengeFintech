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
    case "GET_MOVIES_ALL":
      return {
        ...state,
        allMovies: [...action.payload],
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
