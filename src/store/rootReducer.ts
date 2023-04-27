interface RootState {
    allMovies: []
    movieDetails:[]
    movieFavorite: []
    loader: boolean
  }
  
  const initialState: RootState = {
    allMovies: [],
    movieDetails:[],
    movieFavorite: [],
    loader: true
  };
  
  function rootReducer(state: RootState = initialState, action: any) {
    switch (action.type) {
      // Define tus casos de acciones aquí
      default:
        return state;
    }
  }
  
  export default rootReducer;
  