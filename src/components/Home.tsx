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
      flex={0}
      position={"relative"}
      width={"100%"}
      minH={"50vh"}
      backgroundColor={"black"}
      flexDirection={"row"}
    >
      <Box
        backgroundColor={"white"}
        alignItems={"left"}
        justifyContent={"left"}
        alignContent={"left"}
        flex={1}
        paddingTop={200}
        borderWidth={5}
        borderColor={"pink"}
      >
        <Text fontSize={50} fontWeight={"bold"} color={"black"}>
          About me
        </Text>
        <Text fontSize={40} fontWeight={"bold"} color={"black"} width={"70%"}>
          front-end website and mobile development with experience in React
          Native, Figma, Adobe, and more
        </Text>
      </Box>
      <Box
        backgroundColor={"gray"}
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Text color={"white"}>Github link</Text>
        <Text color={"white"}>https://github.com/RaoulBumbasiJr</Text>
      </Box>
    </View>
  );
};
