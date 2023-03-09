import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";

const Seperator = () => {
  return <View style={styles.container} />;
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: Colors.gold[300],
  },
});
