import React from "react";
import { View, Text, Image, Box } from "native-base";
import htmlLogo from "../assets/images/htmlLogo.png";

export const Home = () => {
  return (
    <View
      alignItems={"center"}
      justifyContent={"center"}
      alignContent={"center"}
      alignSelf={"flex-start"}
      flex={0}
      position={"relative"}
      width={"100%"}
      minH={"100vh"}
    >
      <Text fontSize={50} fontWeight={"bold"}>
        hello, my name is raoul bumbasi jr :)
      </Text>
      <Text fontSize={40} fontWeight={"bold"}>
        i can code in html, css, javascript, and react native
      </Text>
      <Image source={htmlLogo} alt="htmlLogo" />
    </View>
  );
};
