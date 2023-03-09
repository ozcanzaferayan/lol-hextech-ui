import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.rune}
        // @ts-ignore
        source={require("../../../../../assets/runes/conqueror.png")}
      />
      <Image
        style={styles.spellImage}
        // @ts-ignore
        source={require("../../../../../assets/summoner-spells/heal.png")}
      />
      <Image
        style={styles.spellImage}
        // @ts-ignore
        source={require("../../../../../assets/summoner-spells/flash.png")}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16,
    gap: 4,
    alignSelf: "flex-end",
  },
  rune: {
    width: 32,
    height: 32,
  },
  spellImage: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: Colors.gold[300],
  },
});
