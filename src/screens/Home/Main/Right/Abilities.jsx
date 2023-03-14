import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Gradients from '../../../../constants/Gradients';
import {
  AbilityContext,
  AbilityDispatcherContext,
} from '../../../../contexts/DataProviders/AbilityProvider';
import {
  ChampionContext,
  ChampionDispatcherContext,
} from '../../../../contexts/DataProviders/ChampionProvider';

const Abilities = () => {
  const [sound, setSound] = React.useState();
  const champion = useContext(ChampionContext);
  const ability = useContext(AbilityContext);
  const setAbility = useContext(AbilityDispatcherContext);
  const champ = champion;
  const currentAbility = ability;

  React.useEffect(() => {
    return sound
      ? () => {
          // @ts-ignore
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handlePress = async (ability) => {
    setAbility(ability);
    const { sound } = await Audio.Sound.createAsync(
      // @ts-ignore
      require('@assets/sounds/ability_click.mp3'),
    );
    // @ts-ignore
    setSound(sound);
    await sound.playAsync();
  };
  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        data={Object.keys(champ.abilities)}
        renderItem={({ item: ability }) => {
          const isActive = ability === currentAbility;
          return (
            <TouchableOpacity onPress={() => handlePress(ability)}>
              <LinearGradient
                style={styles.iconContainer}
                colors={Gradients.gold}
              >
                <Image
                  style={{
                    ...styles.image,
                    ...(isActive ? styles.smallerImage : {}),
                  }}
                  source={{
                    uri: champ.abilities[ability][0].icon,
                  }}
                />
              </LinearGradient>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 24,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

export default Abilities;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    rowGap: 24,
    columnGap: 24,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  smallerImage: {
    width: 26,
    height: 26,
    borderRadius: 26,
  },
});
