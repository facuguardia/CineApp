import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {useMovies} from '../hooks/useMovies';
import {MoviesScrollHorizontal} from '../components/MoviesScrollHorizontal';
import {MovieCarousel} from '../components/MovieCarousel';

export default function HomeScreen() {
  const {
    isLoading,
    moviesInTheaters,
    popularMovies,
    upcomingReleases,
    topRated,
  } = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.containerSpinner}>
        <ActivityIndicator color="gray" size={80} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Peliculas Carousel */}
        <MovieCarousel movies={moviesInTheaters} />

        {/* Peliculas Cine */}
        <MoviesScrollHorizontal movies={topRated} title="Top 10" />

        {/* Peliculas Populares */}
        <MoviesScrollHorizontal movies={popularMovies} title="Populares" />

        {/* Peliculas Proximamente */}
        <MoviesScrollHorizontal movies={upcomingReleases} title="Proximas" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerSpinner: {flex: 1, justifyContent: 'center', alignContent: 'center'},
});
