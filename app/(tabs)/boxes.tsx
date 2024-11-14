//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Boxes = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width: 100, height: 100, backgroundColor: 'red', boxShadow: '10px 10px 5px green'}}/>
    </View>
  );
};

export default Boxes;
