import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { details } from "../store/actions";
import { Movie } from "../utils/types";
import { RootState } from "../utils/types";
import style from "../styles/detail.module.css"

interface Comment {
  id: number;
  commentary: string;
}

const DetailsMovies = () => {
  const router = useRouter();
  const dispatch = useDispatch<Dispatch>();
  const movieDetails = useSelector((state: RootState) => state.movieDetails);
  const allcomment = useSelector((state: RootState) => state.comment);

  useEffect(() => {
    if (!router.query) return;
    dispatch(details(router.query.DetailsMovies));
  }, [router.query.DetailsMovies, dispatch]);

  return (
    <div className={style.container} >
      {movieDetails
        ? movieDetails.map((movie: Movie) => (
            <div className={style.containerCard} key={movie.id}>
              <p className={style.title}>{movie.title}</p>
              <Image
                width={400}
                height={300}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="img-movie"
              />
              <p>summary: {movie.overview}</p>
              <p>popularity: {movie.popularity}</p>
              <p>release data :  {movie.release_date}</p>
              <p>lenguage original: {movie.original_language}</p>
              <p>comments :</p>
              <div>
                {allcomment
                  ? allcomment.map((comment: Comment, index: number) => (
                      <p key={index}>{comment.commentary}</p>
                    ))
                  : null}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default DetailsMovies;
