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
  HStack,
} from "native-base";
import Lightbulb from "../assets/svg/Lightbulb";
import Mobile from "../assets/svg/Mobile";
import Optimize from "../assets/svg/Optimize";

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
          <HStack
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={20}
          >
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
              paddingX={20}
            >
              <Text
                color={"white"}
                fontFamily={"Roboto Condensed"}
                fontSize={25}
              >
                RESEARCH
              </Text>
              <Lightbulb />
              <Text
                color={"white"}
                fontFamily={"Roboto Condensed"}
                fontSize={20}
                textAlign={"center"}
                paddingTop={10}
              >
                I will research your product and create a website {"\n"} that
                matches your market flawlessly.
              </Text>
            </VStack>
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
              paddingX={20}
            >
              <Text
                color={"white"}
                fontFamily={"Roboto Condensed"}
                fontSize={25}
              >
                BUILD
              </Text>
              <Mobile />
              <Text
                color={"white"}
                fontFamily={"Roboto Condensed"}
                fontSize={20}
                textAlign={"center"}
                paddingTop={10}
              >
                I will build the website you desire.
              </Text>
            </VStack>
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
              paddingX={20}
            >
              <Text
                color={"white"}
                fontFamily={"Roboto Condensed"}
                fontSize={25}
              >
                OPTIMIZE
              </Text>
              <Optimize />
              <Text
                color={"white"}
                fontFamily={"Roboto Condensed"}
                fontSize={20}
                textAlign={"center"}
                paddingTop={10}
              >
                I will build a website fully optimized for web {"\n"} and mobile
                platforms.
              </Text>
            </VStack>
          </HStack>
          <Box justifyContent="center" alignItems="center">
            <Pressable
              _hover={{ background: "#808080" }}
              width={250}
              justifyContent={"center"}
              alignItems={"center"}
              alignContent={"center"}
              marginTop={20}
            >
              <Box
                borderWidth={5}
                borderColor={"#c7aa8b"}
                width={250}
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <Text
                  fontFamily={"Roboto Condensed"}
                  color="#c7aa8b"
                  fontSize={20}
                  paddingX={5}
                  textAlign={"center"}
                >
                  GET IN TOUCH IN ME
                </Text>
              </Box>
            </Pressable>
          </Box>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};
