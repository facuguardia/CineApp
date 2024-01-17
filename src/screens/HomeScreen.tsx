import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';

export default function HomeScreen() {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  return (
    <View>
      {isLoading ? (
        <View>
          <ActivityIndicator color="gray" size={80} />
        </View>
      ) : (
        <View style={{marginTop: top + 20}}>
          {/* <MoviePoster movie={peliculasEnCine[0]} /> */}
          <Carousel
            data={peliculasEnCine}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={400}
            itemWidth={300}
          />
        </View>
      )}
    </View>
  );
}
