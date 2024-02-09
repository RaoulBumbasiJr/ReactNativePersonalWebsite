import React from "react";
import { View, Box, Text, Image } from "native-base";

export const Portfolio = () => {
  const boxes = [
    {
      label: "SkateApp Website",
      image: require("../assets/images/skateapp.png"),
    },
    {
      label: "SuperApps Website",
      image: require("../assets/images/skateapp.png"),
    },
    {
      label: "TravelBlog Website",
      image: require("../assets/images/skateapp.png"),
    },
    {
      label: "E-commerce App",
      image: require("../assets/images/skateapp.png"),
    },
    {
      label: "Portfolio Site",
      image: require("../assets/images/skateapp.png"),
    },
    { label: "WeatherApp", image: require("../assets/images/skateapp.png") },
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
                width={"100%"}
                height={"40vh"}
                margin={2}
                alignItems="center"
                justifyContent="center"
              >
                {/* Image */}
                <Image
                  source={box.image}
                  alt={box.label}
                  width={"100%"}
                  height={"100%"}
                  resizeMode="cover"
                />
              </Box>
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
