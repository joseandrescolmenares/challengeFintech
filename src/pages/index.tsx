import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { getAllMovies } from "../store/actions";
import { Navbar } from "../components/Navbar";
import { ViewerMovies } from "../components/ViewerMovies";
import styles from "../styles/Home.module.css";
import { RootState } from "../utils/types";

export default function Home() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state:RootState) => state.allMovies);
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main className={styles.containerMain}>
        <ViewerMovies stateMovie={allMovies} />
      </main>
    </>
  );
}
