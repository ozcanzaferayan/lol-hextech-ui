import { View, Text } from "react-native";
import React from "react";
import ChampionProvider from "./DataProviders/ChampionProvider";
import AbilityProvider from "./DataProviders/AbilityProvider";
import PlayersProvider from "./DataProviders/PlayersProvider";

const DataProvider = ({ children }) => {
  return (
    <PlayersProvider>
      <ChampionProvider>
        <AbilityProvider>{children}</AbilityProvider>
      </ChampionProvider>
    </PlayersProvider>
  );
};

export default DataProvider;
