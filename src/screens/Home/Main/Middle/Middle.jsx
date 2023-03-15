import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Text from '../../../../components/Text';
import champions from '../../../../data/champions.json';
import Champion from './Champion/Champion';
import Footer from './Footer/Footer';
import Roles from './Roles/Roles';

const Middle = () => {
  return (
    <View style={styles.container}>
      <Roles />
      <View style={{ flex: 1 }}>
        <FlatList
          bounces={false}
          data={Object.keys(champions)}
          renderItem={({ item }) => {
            return <Champion champion={champions[item]} />;
          }}
          keyExtractor={(item) => item}
          numColumns={5}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ padding: 10 }}
        />
        <LinearGradient
          style={styles.gradient}
          colors={['#10131500', '#101315ff']}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Middle;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1.5,
  },
  gradient: {
    height: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
