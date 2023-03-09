import { StyleSheet, View, Image } from "react-native";
import React, { useContext } from "react";
import Text from "../../../../components/Text";
import getChampionRoleIcon from "../../../../utils/getChampionRoleIcon";
import { ChampionContext } from "../../../../contexts/DataProviders/ChampionProvider";

const NameIcon = () => {
  const champion = useContext(ChampionContext);
  const champ = champion;
  return (
    <View style={styles.nameIconContainer}>
      <Image
        style={styles.roleIcon}
        source={{
          uri: getChampionRoleIcon(champ),
        }}
      />
      <Text>{champ.name}</Text>
    </View>
  );
};

export default NameIcon;

const styles = StyleSheet.create({
  nameIconContainer: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 8,
  },
  roleIcon: {
    width: 20,
    height: 20,
  },
});
