import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"; // This import will be removed
import { colors } from "./assets/Colors/Colors";
import PlayButton from "./Components/PlayButton";
import Screen from "./Components/Screen";

export default function App() {
  // Using the useFonts hook to load fonts
  const [fontsLoaded] = useFonts({
    "Futura-Heavy": require("./assets/Fonts/Futura-Heavy.ttf"),
    "Futura-Medium": require("./assets/Fonts/Futura-Medium.ttf"),
    "Futura-Thin": require("./assets/Fonts/Futura-Thin.ttf"),
    "Futura-Light": require("./assets/Fonts/Futura-Light.ttf"),
  });

  // Show a loading screen until fonts are loaded
  if (!fontsLoaded) {
    return <AppLoading />; // This will be removed in future
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Screen />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["bacground-color"],
  },
  text: {
    fontFamily: "Futura-Medium",
    fontSize: 60,
    color: colors["gray-button-color-foreground"],
    marginBottom:50
  },
});
