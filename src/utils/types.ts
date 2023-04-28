export interface Movie {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  release_date: number;
  original_language: string;
  comments: [];
  backdrop_path: string;
}

export  interface Props {
    id: number;
    title: string;
    img: string;
    description: string;
  }
  
  export interface RootState {
    allMovies: [];
    movieDetails: [];
    movieFavorite: [];
    comment: [];
    loader: boolean;
  }