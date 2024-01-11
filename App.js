import React from "react";
import { NativeBaseProvider } from "native-base";
import { View } from "native-base";
import { Navigation } from "./src/components/Navigation";
import { Home } from "./src/components/Home";
import { Portfolio } from "./src/components/Portfolio";

export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <Navigation />
        <Home />
        <Portfolio />
      </View>
    </NativeBaseProvider>
  );
}
