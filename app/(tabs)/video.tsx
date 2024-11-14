//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useVideoPlayer, VideoView} from "expo-video";
import {useEvent} from "expo";

const VIDEO_SOURCE =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';


const Video = () => {
  const player = useVideoPlayer(VIDEO_SOURCE, player => {
    player.loop = true;
    player.play();
    player.volume = 0;
  });

  return (
    <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
  );
};

export default Video;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    flex: 1,
  }
})
