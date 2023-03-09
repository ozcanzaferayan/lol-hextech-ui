import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Reference = () => {
  return (
    <Image
      // @ts-ignore
      source={require("../../assets/reference.png")}
      style={styles.image}
    />
  );
};

export default Reference;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    zIndex: -1,
  },
});
