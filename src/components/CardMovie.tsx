import React from "react";
import Image from "next/image";

import style from "../styles/CardMovie.module.css";

interface Props {
  id: number;
  title: string;
  img: string;
  description: string;
}

export const CardMovie = ({ id, title, img }: Props) => {
  return (
    <div className={style.containerCards}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.img}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt="img-movie"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
