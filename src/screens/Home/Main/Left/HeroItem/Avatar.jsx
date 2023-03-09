// @ts-nocheck
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Avatar = ({ avatar = "" }) => {
  return (
    <LinearGradient colors={["#796A48", "#433A29"]} style={styles.gradient}>
      <Image style={styles.image} source={{ uri: avatar }} />
    </LinearGradient>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#00000066",
  },
  gradient: {
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
