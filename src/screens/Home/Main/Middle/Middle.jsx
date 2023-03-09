import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import Roles from "./Roles/Roles";
import champions from "../../../../data/champions.json";
import Text from "../../../../components/Text";
import Champion from "./Champion/Champion";
import Footer from "./Footer/Footer";
import { LinearGradient } from "expo-linear-gradient";

const Middle = () => {
  return (
    <View style={styles.container}>
      <Roles />
      <View style={{ flex: 1 }}>
        <FlatList
          bounces={false}
          data={Object.keys(champions)}
          renderItem={({ item }) => {
            return <Champion champion={champions[item]} />;
          }}
          keyExtractor={(item) => item}
          numColumns={5}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
        <LinearGradient
          style={styles.gradient}
          colors={["#10131500", "#101315ff"]}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Middle;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flex: 1.5,
    gap: 8,
  },
  gradient: {
    height: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
