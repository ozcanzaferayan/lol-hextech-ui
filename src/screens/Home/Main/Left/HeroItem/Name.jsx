import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../../../../../components/Text";

const Name = ({ hero }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.championName}>{hero.championName}</Text>
      <Text style={styles.username}>{hero.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  championName: {
    fontSize: 16,
  },
  username: {
    fontFamily: "Spiegel-Regular",
    fontSize: 12,
    opacity: 0.8,
  },
});
export default Name;
