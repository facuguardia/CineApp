import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {getColors} from 'react-native-image-colors';

import {Movie} from '../interfaces/movieInterfaces';
import MoviePoster from './MoviePoster';
import { getImageColors } from '../helpers/getColors';

interface Props {
  movies: Movie[];
}

const windowWidth = Dimensions.get('window').width;

export const MovieCarousel = ({movies}: Props) => {
  const getPosterColors = async (index: number) => {
    const movie = movies[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    // const [primary, secondary] = await getImageColors(uri)

    // console.log(primary, secondary);
  };

  return (
    <View style={styles.containerCarousel}>
      <Carousel
        data={movies}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
        onSnapToItem={index => getPosterColors(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCarousel: {height: 440},
});
