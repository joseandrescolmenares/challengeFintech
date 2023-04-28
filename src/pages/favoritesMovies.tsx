import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import { ViewerMovies } from "../components/ViewerMovies";

const FavoritesMovies = () => {
  const allMoviesFavorites = useSelector(
    (state: RootState) => state.movieFavorite
  );
  return (
    <div>
      <ViewerMovies stateMovie={allMoviesFavorites}  favorite="favorite"/>
    </div>
  );
};

export default FavoritesMovies;
