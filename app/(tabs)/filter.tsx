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
          filter: 'opacity(0.5) brightness(0.5)',
      }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Filters;
