import { ScrollView, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import Text from "../../../../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import { ChampionContext } from "../../../../contexts/DataProviders/ChampionProvider";
import { AbilityContext } from "../../../../contexts/DataProviders/AbilityProvider";

const AbilityDescription = () => {
  const champion = useContext(ChampionContext);
  const ability = useContext(AbilityContext);
  const champ = champion;
  const currentAbility = champ.abilities[ability][0];
  return (
    <>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{currentAbility.name}</Text>
          <Text style={styles.description}>
            {currentAbility.effects.map((x) => x.description + "\n\n")}
          </Text>
        </ScrollView>

        <LinearGradient
          style={styles.gradient}
          colors={["#10131500", "#101315ff"]}
        />
      </View>
    </>
  );
};

export default AbilityDescription;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  title: {
    fontSize: 16,
    opacity: 0.5,
  },
  description: {
    marginTop: 8,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "Spiegel-Regular",
  },
  gradient: {
    height: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
