//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Boxes = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        boxShadow: '10px 10px 10px gray, -10px -10px 10px lime'
        // boxShadow: {
        //   offsetX: 5,
        //   offsetY: 5,
        //   blurRadius: 10,
        //   spreadDistance: 5,
        //   color: 'green',
        // },
      }}/>
    </View>
  );
};

export default Boxes;
