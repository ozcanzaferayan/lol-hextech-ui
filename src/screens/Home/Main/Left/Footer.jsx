import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="map" size={12} color={"#A09579"} />
        </TouchableOpacity>
        <View style={styles.seperator} />

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="message" size={12} color={"#A09579"} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="microphone-off"
            size={12}
            color={"#A0957999"}
          />
        </TouchableOpacity>
        <View style={styles.seperator} />

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="volume-off"
            size={12}
            color={"#A0957999"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderColor: "#A0957966",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  seperator: {
    width: 0.5,
    height: 20,
    backgroundColor: "#A0957966",
  },
  button: {},
});
