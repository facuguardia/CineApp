import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface Props {
  cast: Cast;
}

export const CardCasting = ({cast}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

  return (
    <View style={styles.container}>
      {/* Casting */}
      <View style={styles.imageContainer}>
        {cast.profile_path && <Image source={{uri}} style={styles.Image} />}
      </View>
      <View style={styles.castingContainer}>
        <Text style={styles.castingName}>{cast.name}</Text>
        <Text style={styles.castingCharacter}>{cast.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    width: 200,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    marginRight: 10,
  },
  imageContainer: {
    backgroundColor: 'white',
  },
  Image: {
    width: 50,
    height: 50,
  },
  castingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  castingName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  castingCharacter: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'gray',
  },
});
