import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SummonerSpells from "./SummonerSpells";
import Avatar from "./Avatar";
import Name from "./Name";

const HeroItem = ({ hero = {} }) => {
  return (
    <View style={styles.container}>
      <SummonerSpells summonerSpells={hero?.summonerSpells} />
      <Avatar avatar={hero.avatar} />
      <Name hero={hero} />
    </View>
  );
};

export default HeroItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginStart: 8,
  },
});
