import { StyleSheet, Text as RNText, View } from "react-native";
import React from "react";

const Text = ({ children, style = {} }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Beaufort-Medium",
    fontWeight: "bold",
    color: "#ebe2cf",
  },
});
