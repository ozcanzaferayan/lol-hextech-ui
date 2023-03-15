import { Audio } from 'expo-av';
import React, { useContext, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '@components/Text';
import Colors from '@constants/Colors';
import {
  ChampionContext,
  ChampionDispatcherContext,
} from '@contexts/DataProviders/ChampionProvider';
import SvgScan from '@assets/svg/SvgScan';

const Champion = ({ champion }) => {
  const sizeAnim = useRef(new Animated.Value(0)).current;

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

    console.log('clicked');
    Animated.timing(sizeAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.back(),
      useNativeDriver: true,
    }).start();

    const { sound } = await Audio.Sound.createAsync(
      // @ts-ignore
      require('@assets/sounds/champion_click.mp3'),
    );
    // @ts-ignore
    setSound(sound);
    await sound.playAsync();
  };
  return (
    <>
      <Pressable key={id} style={styles.container} onPress={handlePress}>
        <Image
          style={{
            ...styles.image,
          }}
          source={{ uri: icon }}
        />
        {isActive && (
          <Animated.View
            style={{
              opacity: 1,
              position: 'absolute',
              transform: [
                {
                  scale: sizeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1.2, 1],
                  }),
                },
              ],
              width: 50,
              height: 50,
              top: 0,
            }}
          >
            <SvgScan />
          </Animated.View>
        )}

        {isActive && (
          <Animated.View
            style={{
              opacity: 1,
              position: 'absolute',
              transform: [
                {
                  scale: sizeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
              width: 50,
              height: 50,
              top: 0,
            }}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 50,
                borderColor: Colors.gold[100],
                borderWidth: 3,
              }}
            />
          </Animated.View>
        )}

        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </>
  );
};

export default Champion;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
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
    zIndex: -1,
  },
});
