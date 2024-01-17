import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Movie } from '../interfaces/movieInterfaces';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

const windowWidth = Dimensions.get('window').width;

export const MovieCarousel = ( {movies} : Props) => {
  return (
    <View style={styles.containerCarousel}>
      <Carousel
        data={movies}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCarousel: {height: 440},
});
