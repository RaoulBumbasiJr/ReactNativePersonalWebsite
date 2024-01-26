import React from "react";
import { View, Text, Box, Button } from "native-base";

export const Navigation = () => {
  return (
    <View backgroundColor={"black"} width={"100%"}>
      <Box>
        <Text
          textAlign={"left"}
          fontSize={50}
          paddingLeft={50}
          color={"white"}
          paddingTop={50}
        >
          Raoul Bumbasi Jr
        </Text>
        <Text
          textAlign={"right"}
          color={"white"}
          fontSize={30}
          paddingRight={100}
        >
          about portfolio contact
        </Text>
      </Box>
    </View>
  );
};
