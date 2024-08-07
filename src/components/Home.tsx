import React from "react";
import { View, Text, Image, Box } from "native-base";
import htmlLogo from "../assets/images/htmlLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import jsLogo from "../assets/images/jsLogo.png";
import reactLogo from "../assets/images/reactLogo.png";
import wordpressLogo from "../assets/images/wordpressLogo.png";
import adobeLogo from "../assets/images/adobeLogo.png";

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
      <Image source={cssLogo} alt="cssLogo" />
      <Image source={jsLogo} alt="jsLogo" />
      <Image source={reactLogo} alt="reactLogo" />
      <Image source={wordpressLogo} alt="wordpressLogo" />
      <Image source={adobeLogo} alt="adobeLogo" />
    </View>
  );
};
