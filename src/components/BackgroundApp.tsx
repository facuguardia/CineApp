import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

function BackgroundApp({children}: Props) {
  const {colors} = useContext(GradientContext);

  return (
    <View style={{backgroundColor: 'gray', flex: 1}}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, '#fff']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
}

export default BackgroundApp;
