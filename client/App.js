import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/routes/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf",
  },
});
