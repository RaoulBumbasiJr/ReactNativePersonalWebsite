import React from "react";
import { Text, View } from "react-native";
import { Navigation } from "./src/components/Navigation";
import { Home } from "./src/components/Home";

export default function App() {
  return (
    <View>
      <Navigation />
      <Home />
    </View>
  );
}
