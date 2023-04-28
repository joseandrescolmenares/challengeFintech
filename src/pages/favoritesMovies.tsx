import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import { ViewerMovies } from "../components/ViewerMovies";

const FavoritesMovies = () => {
  const allMoviesFavorites = useSelector(
    (state: RootState) => state.movieFavorite
  );
  console.log(allMoviesFavorites);
  return (
    <div>
      <ViewerMovies stateMovie={allMoviesFavorites} />
    </div>
  );
};

export default FavoritesMovies;
