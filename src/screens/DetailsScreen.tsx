import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {RootStackParams} from '../navigation/NavigationScreens';
import {ScrollView} from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export default function DetailsScreen({route}: Props) {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View style={styles.container}>
        {/* Título original */}
        <Text style={styles.titleOriginal}>{movie.original_title}</Text>

        {/* Título */}
        <Text style={styles.titleMovie}>{movie.title}</Text>

        {/* Puntaje y Género */}
        <Text style={styles.scoreAndGender}>
          <Icon
            name="star-outline"
            color="grey"
            size={ 15 }
          />
          {movie.vote_average} - {movie.vote_count}
        </Text>

        {/* Descripción */}
        <Text style={styles.titleSections}>Historia</Text>
        <Text style={styles.description}>{movie.overview}</Text>

        {/* Casting */}
        <Text style={styles.titleSections}>Actores</Text>
        {/* <Image /> */}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 15,
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
  },
  titleMovie: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  scoreAndGender: {
    fontSize: 13,
    fontWeight: 'normal',
  },
  titleSections: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
