import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AddComment } from "./AddComment";
import style from "../styles/CardMovie.module.css";
import { Props } from "../utils/types";
import { AddFavorites } from "./AddFavorites";


export const CardMovie = ({ id, title, img }: Props) => {
  return (
    <div className={style.containerCards}>
      <AddFavorites id={id}/>
      <Link href={`/${id}`}>
        <h1 className={style.title}>{title}</h1>
      </Link>
      <div className={style.img}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt="img-movie"
          width={200}
          height={200}
        />
      </div>
      <AddComment id={id} />
    </div>
  );
};
