import { StyleSheet, View } from 'react-native';
import AnimationBackground from './AnimationBackground';
import Avatar from './Avatar';
import Name from './Name';
import SummonerSpells from './SummonerSpells';

const HeroItem = ({ hero = {} }) => {
  return (
    <View>
      {hero.championName === 'Selecting...' && <AnimationBackground />}
      <View style={styles.container}>
        <SummonerSpells summonerSpells={hero?.summonerSpells} />
        <Avatar avatar={hero.avatar} />
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
