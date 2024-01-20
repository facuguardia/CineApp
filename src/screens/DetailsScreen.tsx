import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParams} from '../navigation/NavigationScreens';
import {ScrollView} from 'react-native-gesture-handler';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export default function DetailsScreen({route, navigation}: Props) {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        {/* Boton volver */}
        <Image source={{uri}} style={styles.image} />
        <View style={styles.buttonBack}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="arrow-back-outline" color="white" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        {/* Título original */}
        <Text style={styles.titleOriginal}>{movie.original_title}</Text>

        {/* Título */}
        <Text style={styles.titleMovie}>{movie.title}</Text>

        {/* Detalle */}
        {isLoading ? (
          <ActivityIndicator color="grey" size={35} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  buttonBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 100,
    backgroundColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 10,
  },
  imageContainer: {
    width: '100%',
    height: 500,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  titleOriginal: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'gray',
  },
  titleMovie: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
});
