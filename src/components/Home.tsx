import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Box,
  NativeBaseProvider,
  Pressable,
} from "native-base";
import { Linking } from "react-native";

export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenGitHub = () => {
    Linking.openURL("https://github.com/RaoulBumbasiJr"); // Replace with your GitHub URL
  };

  return (
    <NativeBaseProvider>
      <View
        flex={0}
        position={"relative"}
        width={"100%"}
        minH={"60vh"}
        backgroundColor={"black"}
        flexDirection={"row"}
      >
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          alignContent={"center"}
          flex={1}
        >
          <Text fontSize={50} fontWeight={"bold"} color={"white"}>
            About me
          </Text>
          <Text fontSize={40} fontWeight={"bold"} color={"white"} width={"70%"}>
            Front-end website and mobile development with experience in React
            Native, Figma, Adobe, and more :)
          </Text>
        </Box>
        <Box
          backgroundColor={"gray"}
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Pressable
            onPress={handleOpenGitHub}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
          >
            <Text color={isHovered ? "purple.500" : "white"} fontSize={50}>
              Github link
            </Text>
          </Pressable>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};
