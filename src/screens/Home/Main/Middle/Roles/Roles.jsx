import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../../../../constants/Colors";

const Roles = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://static.wikia.nocookie.net/leagueoflegends/images/6/67/Specialist_icon.png",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png",
        }}
      />
    </View>
  );
};

export default Roles;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    width: 18,
    height: 18,
    opacity: 0.5,
  },
});
