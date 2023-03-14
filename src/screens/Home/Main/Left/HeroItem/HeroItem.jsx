import { StyleSheet, View } from 'react-native';
import AnimationBackground from './AnimationBackground';
import Avatar from './Avatar';
import Name from './Name';
import SummonerSpells from './SummonerSpells';

const HeroItem = ({ hero = {} }) => {
  const isActive = hero.championName === 'Selecting...';
  return (
    <View>
      {isActive && <AnimationBackground />}
      <View style={styles.container}>
        <SummonerSpells summonerSpells={hero?.summonerSpells} />
        <Avatar avatar={hero.avatar} isActive={isActive} />
        <Name hero={hero} />
      </View>
    </View>
  );
};

export default HeroItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginStart: 8,
  },
});
