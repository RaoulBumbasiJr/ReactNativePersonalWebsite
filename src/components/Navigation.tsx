import React from "react";
import { View, Box, Pressable, HStack, Text } from "native-base";

export const Navigation = () => {
  return (
    <View backgroundColor={"#323232"} width={"100%"} justifyContent={"center"}>
      <HStack justifyContent={"center"} padding={5} alignItems="center">
        <Pressable>
          <Text fontSize={30} paddingRight={50} color={"white"}>
            Raoul Bumbasi Jr
          </Text>
        </Pressable>
        <Box
          width="1px"
          height="30px"
          backgroundColor="white"
          marginX={2}
          alignSelf="center"
        />

        <Pressable>
          <Text color={"white"} fontSize={30} textAlign={"center"}>
            Home
          </Text>
        </Pressable>

        <Box
          width="1px"
          height="30px"
          backgroundColor="white"
          marginX={2}
          alignSelf="center"
        />
        <Pressable>
          <Text color={"white"} fontSize={30}>
            Work
          </Text>
        </Pressable>

        <Box
          width="1px"
          height="30px"
          backgroundColor="white"
          marginX={2}
          alignSelf="center"
        />
        <Pressable>
          <Text color={"white"} fontSize={30}>
            Contact
          </Text>
        </Pressable>
        <Box
          width="1px"
          height="30px"
          backgroundColor="white"
          marginX={2}
          alignSelf="center"
        />
      </HStack>
    </View>
  );
};
