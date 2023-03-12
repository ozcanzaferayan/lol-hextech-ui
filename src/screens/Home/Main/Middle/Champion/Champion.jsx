import { Audio } from 'expo-av';
import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '@components/Text';
import Colors from '@constants/Colors';
import {
  ChampionContext,
  ChampionDispatcherContext,
} from '@contexts/DataProviders/ChampionProvider';

const Champion = ({ champion }) => {
  const [sound, setSound] = React.useState();
  const setChampion = useContext(ChampionDispatcherContext);
  const selectedChampion = useContext(ChampionContext);
  const { id, name, icon } = champion;
  const isActive = selectedChampion.name === champion.name;

  React.useEffect(() => {
    return sound
      ? () => {
          // @ts-ignore
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handlePress = async () => {
    setChampion(champion);
    const { sound } = await Audio.Sound.createAsync(
      // @ts-ignore
      require('@assets/sounds/champion_click.mp3'),
    );
    // @ts-ignore
    setSound(sound);
    await sound.playAsync();
  };
  return (
    <TouchableOpacity key={id} style={styles.container} onPress={handlePress}>
      <Image
        style={{
          ...styles.image,
          borderColor: isActive ? Colors.gold[100] : Colors.grey[150],
        }}
        source={{ uri: icon }}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Champion;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Spiegel-Regular',
    fontSize: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.grey[150],
  },
});
