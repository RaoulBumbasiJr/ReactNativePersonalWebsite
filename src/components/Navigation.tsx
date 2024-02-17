import React from "react";
import { View, Text, Box, Button, Pressable, HStack } from "native-base";

export const Navigation = () => {
  return (
    <View backgroundColor={"black"} width={"100%"}>
      <Box>
        <Pressable
          textAlign={"left"}
          fontSize={50}
          paddingLeft={50}
          color={"white"}
          paddingTop={50}
        >
          Raoul Bumbasi Jr
        </Pressable>
        <HStack textAlign={"right"}>
          <Pressable
            textAlign={"right"}
            color={"white"}
            fontSize={30}
            paddingRight={5}
          >
            about
          </Pressable>
          <Pressable
            textAlign={"right"}
            color={"white"}
            fontSize={30}
            paddingRight={5}
          >
            about
          </Pressable>
          <Pressable
            textAlign={"right"}
            color={"white"}
            fontSize={30}
            paddingRight={5}
          >
            about
          </Pressable>
        </HStack>
      </Box>
    </View>
  );
};
