//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import image from '../../assets/images/react-logo.png'
import {useImage} from "expo-image";

const Filters = () => {

  const image = useImage("https://picsum.photos/1000/800", {
    maxWidth: 800,
    onError(error, retry) {
      console.log(error)
    }
  });

  console.log(image)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{uri: image }}
        style={{
          width: '100%',
          aspectRatio: image?.width ? image?.height,
          backgroundColor: 'lightgray',
          filter: 'sepia(100%)',
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
