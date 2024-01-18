import React, {useEffect} from 'react';
import {MovieFull} from '../interfaces/movieInterfaces';
import movieDB from '../api/movieDB';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = React.useState<MovieDetails>();

  const getMovieDetails = async () => {
    const resp = await movieDB.get<MovieFull>(`/${movieId}`);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
