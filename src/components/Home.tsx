import React from "react";
import {
  View,
  Text,
  Image,
  Box,
  NativeBaseProvider,
  Divider,
  Pressable,
  VStack,
} from "native-base";
import Lightbulb from "../assets/svg/Lightbulb";

export const Home = () => {
  return (
    <NativeBaseProvider>
      <View flex={1}>
        {/* Use Box to Layer Components */}
        <Box position="relative" width="100%" height="50vh">
          {/* Background Image */}
          <Image
            source={require("../assets/images/homeBackground.jpg")}
            alt="Background"
            width="100%"
            height="100%"
            resizeMode="cover"
          />
          {/* Overlay Content */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontFamily={"Roboto Condensed"}
              fontSize={80}
              fontWeight="300"
              color="white"
            >
              RAOUL BUMBASI JR
            </Text>
            <Text
              fontFamily={"Roboto Condensed"}
              fontSize={80}
              fontWeight="700"
              color="white"
            >
              WEBSITE DEVELOPER
            </Text>
            <Divider
              bg="white"
              thickness="2"
              width="50%"
              marginTop={2}
              alignSelf="center"
            />
            <Text
              fontFamily={"Roboto Condensed"}
              color="white"
              fontSize={20}
              paddingTop={10}
              paddingBottom={5}
            >
              html/css, javascript, react, adobe, mongodb, express, and node.js
            </Text>
            <Pressable _hover={{ background: "#808080" }}>
              <Box borderWidth={5} borderColor={"white"}>
                <Text
                  fontFamily={"Roboto Condensed"}
                  color="white"
                  fontSize={20}
                  paddingX={5}
                >
                  SEE MY WORK
                </Text>
              </Box>
            </Pressable>
          </Box>
        </Box>
        <Box width={"100%"} height={"60vh"} backgroundColor={"#4d4d4d"}>
          <VStack justifyContent={"center"} alignItems={"center"}>
            <Text color={"white"} fontFamily={"Roboto Condensed"} fontSize={25}>
              RESEARCH
            </Text>
            <Lightbulb />
            <Text
              color={"white"}
              fontFamily={"Roboto Condensed"}
              fontSize={25}
              noOfLines={2}
              textAlign={"center"}
            >
              I will research your product and create a website {"\n"} that
              matches your market flawlessly.
            </Text>
          </VStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};
