import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Left from "./Left/Left";
import Middle from "./Middle/Middle";
import Right from "./Right/Right";

const Main = () => {
  return (
    <View style={styles.container}>
      <Left />
      <Middle />
      <Right />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
});
