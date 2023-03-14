import { Audio } from 'expo-av';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SoundProvider = ({ children }) => {
  const [sound, setSound] = React.useState();

  useEffect(() => {
    const playMusic = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/music.mp3'),
      );
      setSound(sound);
      await sound.playAsync();
    };
    playMusic();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  return children;
};

export default SoundProvider;

const styles = StyleSheet.create({});
