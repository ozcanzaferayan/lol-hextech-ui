import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Providers from "./src/contexts/Providers";
import Home from "./src/screens/Home/Home";

export default function App() {
  return (
    <>
      <Providers>
        <Home />
      </Providers>
      {/* <Reference /> */}
    </>
  );
}
