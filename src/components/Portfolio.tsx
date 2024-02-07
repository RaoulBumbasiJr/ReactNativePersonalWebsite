import React from "react";
import { View, Box } from "native-base";

export const Portfolio = () => {
  const boxes = Array(6).fill({});

  return (
    <View
      flex={0}
      position={"relative"}
      width={"100%"}
      minH={"100vh"}
      backgroundColor={"black"}
    >
      {Array.from({ length: 2 }).map((_, rowIndex) => (
        <View key={rowIndex} flexDirection="row" justifyContent="space-around">
          {boxes.slice(rowIndex * 3, rowIndex * 3 + 3).map((_, index) => (
            <Box
              key={index}
              borderColor={"pink"}
              borderWidth={1}
              width={"30%"}
              height={"45vh"}
              backgroundColor={"white"}
              padding={10}
              margin={2}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
