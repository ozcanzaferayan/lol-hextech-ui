import { StyleSheet, View } from "react-native";
import NameIcon from "./NameIcon";
import Seperator from "./Seperator";
import Abilities from "./Abilities";
import AbilityDescription from "./AbilityDescription";
import Footer from "./Footer";

const Right = () => {
  return (
    <View style={styles.container}>
      <NameIcon />
      <Seperator />
      <Abilities />
      <AbilityDescription />
      <Footer />
    </View>
  );
};

export default Right;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    marginStart: 42,
    gap: 8,
  },
});
