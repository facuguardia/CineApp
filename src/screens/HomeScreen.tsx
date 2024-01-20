import React, { useContext, useEffect } from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, View, ScrollView, StyleSheet, Dimensions} from 'react-native';

import {useMovies} from '../hooks/useMovies';
import {MoviesScrollHorizontal} from '../components/MoviesScrollHorizontal';
import {BackgroundApp} from '../components/BackgroundApp';
import Carousel from 'react-native-snap-carousel';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import MoviePoster from '../components/MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

export default function HomeScreen() {
  const {
    isLoading,
    moviesInTheaters,
    popularMovies,
    upcomingReleases,
    topRated,
  } = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = moviesInTheaters[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (moviesInTheaters.length > 0) {
      getPosterColors(0);
    }
  }, [moviesInTheaters]);

  if (isLoading) {
    return (
      <View style={styles.containerSpinner}>
        <ActivityIndicator color="gray" size={80} />
      </View>
    );
  }

  return (
    <BackgroundApp>
      <ScrollView>
        <View style={{marginTop: top + 30}}>
          {/* Carosel Principal */}
          <View style={{height: 440}}>
            <Carousel
              data={moviesInTheaters}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas Cine */}
          <MoviesScrollHorizontal movies={topRated} title="Top 10" />

          {/* Peliculas Populares */}
          <MoviesScrollHorizontal movies={popularMovies} title="Populares" />

          {/* Peliculas Proximamente */}
          <MoviesScrollHorizontal movies={upcomingReleases} title="Proximas" />
        </View>
      </ScrollView>
    </BackgroundApp>
  );
}

const styles = StyleSheet.create({
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
