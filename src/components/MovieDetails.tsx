import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MovieFull} from '../interfaces/movieInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardCasting} from './CardCasting';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <View>
      {/* Score & Gender */}
      <View style={styles.scoreDetails}>
        <Icon name="star-outline" size={16} color="grey" />
        <Text>{movieFull.vote_average.toString().slice(0, 3)}</Text>
        <Text>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
      </View>
      {/* Descripción */}
      <Text style={styles.titleSections}>Historia</Text>
      <Text style={styles.description}>{movieFull.overview}</Text>

      <View>
        <Text style={styles.titleSections}>Actores</Text>
        {/* <CardCasting cast={cast} /> */}
        <FlatList 
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CardCasting cast={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
  },
  titleSections: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
