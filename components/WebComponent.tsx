"use dom";

//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RichTextEditor from 'rich-text-editor'

const WebComponent = () => {
  return (
    <div>
      <h1>I am Rokas</h1>
      <p>Hello, I'm a React Native Web component!</p>
      <button>Click me!</button>
      <RichTextEditor
        // value={value}
        // onChange={setValue}
        placeholder="Type something..."
      />
    </div>
  );
};

export default WebComponent;
