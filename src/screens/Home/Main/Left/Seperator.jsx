import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Seperator = () => {
  return (
    <LinearGradient
      colors={["#433A29", "#433A2900"]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    />
  );
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    height: 1.5,
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 3,
  },
});
