import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterfaces';

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [moviesInTheaters, setMoviesInTheaters] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [upcomingReleases, setUpcomingReleases] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBResponse>('/now_playing');
    const movies = resp.data.results;
    setMoviesInTheaters(movies);
    setIsLoading(false);
  };

  const getMoviesPopular = async () => {
    const resp = await movieDB.get<MovieDBResponse>('/popular');
    const popular = resp.data.results;
    setPopularMovies(popular);
    setIsLoading(false);
  };

  const getUpcomingReleases = async () => {
    const resp = await movieDB.get<MovieDBResponse>('/upcoming');
    const upcoming =  resp.data.results;
    setUpcomingReleases(upcoming);
    setIsLoading(false);
  }

  const getTopRated = async () => {
    const resp = await movieDB.get<MovieDBResponse>('/top_rated');
    const topRated = resp.data.results;
    setTopRated(topRated);
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
    getMoviesPopular();
    getUpcomingReleases();
    getTopRated();
  }, []);

  return {
    isLoading,
    moviesInTheaters,
    popularMovies,
    upcomingReleases,
    topRated,
  };
};
