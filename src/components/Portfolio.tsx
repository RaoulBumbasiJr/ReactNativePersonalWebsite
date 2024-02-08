import React from "react";
import { View, Box, Text } from "native-base";

export const Portfolio = () => {
  const boxes = [
    { label: "SkateApp Website" },
    { label: "SuperApps Website" },
    { label: "TravelBlog Website" },
    { label: "E-commerce App" },
    { label: "Portfolio Site" },
    { label: "WeatherApp" },
  ];

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
          {boxes.slice(rowIndex * 3, rowIndex * 3 + 3).map((box, index) => (
            <View key={index} style={{ alignItems: "center", width: "30%" }}>
              {/* Box */}
              <Box
                borderColor={"pink"}
                borderWidth={1}
                width={"100%"} // Ensure the box takes the full width of its container
                height={"40vh"} // Adjust the height to your preference
                backgroundColor={"white"}
                margin={2}
              />
              {/* Label */}
              <Text
                fontSize="lg"
                color="white"
                textAlign="center"
                marginTop={2}
              >
                {box.label}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
