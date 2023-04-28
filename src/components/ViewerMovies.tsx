import React from "react";

import { CardMovie } from "./CardMovie";
import style from "../styles/ViewerMovie.module.css";
import { Movie } from "../utils/types";


export const ViewerMovies = ({ stateMovie }) => {
  return (
    <div className={style.container}>
      {stateMovie
        ? stateMovie.map((movie: Movie ) => (
            <CardMovie
              key={movie?.id}
              id={movie?.id}
              title={movie?.title}
              img={movie?.backdrop_path}
            />
          ))
        : null}
    </div>
  );
};
