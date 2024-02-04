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
      minH={"60vh"}
      backgroundColor={"black"}
      flexDirection={"row"}
    >
      <Box
        backgroundColor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        flex={1}
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
        <Text color={"white"} fontSize={50}>
          Github link
        </Text>
        <Text color={"white"}>https://github.com/RaoulBumbasiJr</Text>
      </Box>
    </View>
  );
};
