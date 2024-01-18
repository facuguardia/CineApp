import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

function BackgroundApp({children}: Props) {
  return (
    <View style={{backgroundColor: 'gray', flex: 1}}>
      <LinearGradient
        colors={['white', 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
}

export default BackgroundApp;
