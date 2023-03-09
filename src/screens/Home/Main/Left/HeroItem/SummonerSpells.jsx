// @ts-nocheck
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SummonerSpells = ({
  summonerSpells = [
    require("../../../../../../assets/summoner-spells/ghost.png"),
    require("../../../../../../assets/summoner-spells/ghost.png"),
  ],
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={summonerSpells[0]} />
      <Image style={styles.image} source={summonerSpells[1]} />
    </View>
  );
};

export default SummonerSpells;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 4,
  },
  image: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000",
  },
});
