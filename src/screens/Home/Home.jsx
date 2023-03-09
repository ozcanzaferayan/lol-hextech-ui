import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Constants from "expo-constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 50,
  },
});
