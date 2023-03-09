// @ts-nocheck
import { View } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const FontProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    "Beaufort-Regular": require("../../assets/fonts/BeaufortforLOL-Regular.otf"),
    "Beaufort-Bold": require("../../assets/fonts/BeaufortforLOL-Bold.otf"),
    "Beaufort-Medium": require("../../assets/fonts/BeaufortforLOL-Medium.otf"),
    "Spiegel-Regular": require("../../assets/fonts/Spiegel-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      {children}
    </View>
  );
};

export default FontProvider;
