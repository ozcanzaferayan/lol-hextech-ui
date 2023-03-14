import { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PlayersContext } from '../../../../contexts/DataProviders/PlayersProvider';
import Footer from './Footer';
import HeroItem from './HeroItem/HeroItem';
import Seperator from './Seperator';

const Left = () => {
  const players = useContext(PlayersContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({ item }) => <HeroItem hero={item} />}
        keyExtractor={(item) => item.username}
        ItemSeparatorComponent={() => <Seperator />}
      />
      <Footer />
    </View>
  );
};

export default Left;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
