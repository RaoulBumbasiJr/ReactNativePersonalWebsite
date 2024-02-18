import React from "react";
import { View, Box, Pressable, HStack, Text } from "native-base";

export const Navigation = () => {
  return (
    <View backgroundColor={"black"} width={"100%"}>
      <Box>
        <Pressable>
          <Text
            textAlign={"left"}
            fontSize={50}
            paddingLeft={50}
            color={"white"}
          >
            Raoul Bumbasi Jr
          </Text>
        </Pressable>
        <HStack justifyContent={"right"}>
          <Pressable>
            <Text
              textAlign={"right"}
              color={"white"}
              fontSize={30}
              paddingRight={5}
            >
              home
            </Text>
          </Pressable>
          <Pressable>
            <Text
              textAlign={"right"}
              color={"white"}
              fontSize={30}
              paddingRight={5}
            >
              work
            </Text>
          </Pressable>
          <Pressable>
            <Text
              textAlign={"right"}
              color={"white"}
              fontSize={30}
              paddingRight={5}
            >
              contact
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </View>
  );
};
