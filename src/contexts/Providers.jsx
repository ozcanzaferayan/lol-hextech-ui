import { View, Text } from "react-native";
import React from "react";
import FontProvider from "./FontProvider";
import BackgroundProvider from "./BackgroundProvider";
import SoundProvider from "./SoundProvider";
import DataProvider from "./DataProvider";

const Providers = ({ children }) => {
  return (
    <DataProvider>
      <BackgroundProvider>
        <SoundProvider>
          <FontProvider>{children}</FontProvider>
        </SoundProvider>
      </BackgroundProvider>
    </DataProvider>
  );
};

export default Providers;
