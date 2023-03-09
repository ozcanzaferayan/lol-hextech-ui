import { StyleSheet, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Text from "../../../components/Text";

const Header = () => {
  const [counter, setCounter] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => {
        if (counter === 0) {
          clearInterval(interval);
          return;
        }
        return counter - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        // @ts-ignore
        source={require("../../../../assets/champ-select-left.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>SELECT YOUR CHAMPION!</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>
      <Image
        style={styles.image}
        // @ts-ignore
        source={require("../../../../assets/champ-select-right.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingVertical: 8,
    flexDirection: "row",
    paddingHorizontal: 100,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginHorizontal: -82,
  },
  counter: {
    fontSize: 24,
  },
  image: {
    width: 210,
    height: 30,
    resizeMode: "contain",
  },
});
