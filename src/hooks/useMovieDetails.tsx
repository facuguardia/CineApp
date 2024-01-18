import React, {useEffect} from 'react';

import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterfaces';
import { MovieCredits } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = React.useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<MovieCredits>(`/${movieId}/credits`);

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };


  useEffect(() => {
    getMovieDetails();
  }, []);


  return {
    ...state,
  };
};
