import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { details } from "../store/actions";

interface Movie {
  id: number;
  title: string;
  overview: string
  popularity:number
  release_date :number
  original_language : string
  comments : []
}

const DetailsMovies = () => {
  const router = useRouter();
  const dispatch = useDispatch<Dispatch>();
  const movieDetails = useSelector((state) => state.movieDetails)
  const comment = useSelector((state) => state.comment);
  console.log(comment)

  useEffect(() => {
    if (!router.query) return;
    dispatch(details(router.query.DetailsMovies));
  }, [router.query.DetailsMovies, dispatch]);

  return (
    <div>
      {movieDetails
        ? movieDetails.map((movie: Movie) => (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <Image
                width={200}
                height={300}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="img-movie"
              />
              <p>{movie.overview}</p>
              <p>{movie.popularity}</p>
              <p>{movie.release_date}</p>
              <p>{movie.original_language}</p>
              <p>comments</p>
              {/* <div>
                {movie.comments.map((comment) => (
                  <p>{comment}</p>
                ))}
              </div> */}
            </div>
          ))
        : null}
    </div>
  );
};
export default DetailsMovies;
