import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BackgroundProvider = ({ children }) => {
  return (
    <>
      <ImageBackground
        style={styles.image}
        // @ts-ignore
        source={require("../../assets/background.jpg")}
      >
        <LinearGradient
          colors={["#101315", "#101315ee", "#101315"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {children}
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

export default BackgroundProvider;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
