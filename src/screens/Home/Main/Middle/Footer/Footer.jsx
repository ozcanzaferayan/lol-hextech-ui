import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../../../constants/Colors";
import Text from "../../../../../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import Gradients from "../../../../../constants/Gradients";

const Footer = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[Colors.blue[400], Colors.blue[700]]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={styles.text}>LOCK IN</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 24,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: Colors.blue[300],
  },
  gradient: {
    paddingHorizontal: 32,
    paddingVertical: 4,
  },
  text: {
    color: Colors.blue[100],
    fontSize: 16,
  },
});
