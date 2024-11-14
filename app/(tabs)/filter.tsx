//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import image from '../../assets/images/react-logo.png'

const Filters = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{
          width: 200,
          height: 200,
          filter: 'opacity(0.5) brightness(120%) hue-rotate(180deg)',
      }}
        resizeMode="contain"
      />

      <Image
        source={{uri: 'https://picsum.photos/400'}}
        style={{
          width: 200,
          height: 200,
          filter: 'opacity(0.5) brightness(120%) hue-rotate(90deg) drop-shadow(16px 16px 20px red)',
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Filters;
