import React, { useState } from "react";
import { View, Box, Text, Image, Pressable } from "native-base";
import { Linking } from "react-native";

export const Portfolio = () => {
  const boxes = [
    {
      label: "SkateApp Website",
      image: require("../assets/images/skateapp.png"),
      url: "https://www.skateapp.net/",
    },
    {
      label: "SuperApps Website",
      image: require("../assets/images/superapps.png"),
      url: "https://www.superapps.com/",
    },
    {
      label: "CHRR Website",
      image: require("../assets/images/chrr.png"),
      url: "https://homerepairca.com/",
    },
    {
      label: "SkateApp Mobile",
      image: require("../assets/images/skateappMobile.png"),
    },
    {
      label: "Pokedex App",
      image: require("../assets/images/skateapp.png"),
    },
    { label: "WeatherApp", image: require("../assets/images/skateapp.png") },
  ];

  const handleOpenURL = (url) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  // Track the index of the currently hovered box
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <View
      flex={0}
      position={"relative"}
      width={"100%"}
      minH={"100vh"}
      backgroundColor={"black"}
    >
      <Text color={"white"} textAlign={"center"} fontSize={50}>
        Projects
      </Text>

      {Array.from({ length: 2 }).map((_, rowIndex) => (
        <View key={rowIndex} flexDirection="row" justifyContent="space-around">
          {boxes.slice(rowIndex * 3, rowIndex * 3 + 3).map((box, index) => {
            const isHovered = hoveredIndex === index + rowIndex * 3;

            return (
              <View key={index} style={{ alignItems: "center", width: "30%" }}>
                <Pressable
                  margin={2}
                  alignItems="center"
                  justifyContent="center"
                  onPress={() => handleOpenURL(box.url)}
                  onHoverIn={() => setHoveredIndex(index + rowIndex * 3)}
                  onHoverOut={() => setHoveredIndex(null)}
                  width={isHovered ? "102%" : "100%"}
                  height={"40vh"}
                >
                  <Box
                    borderWidth={2}
                    borderColor={"white"}
                    width={"100%"}
                    alignItems="center"
                    justifyContent="center"
                    height={isHovered ? "42vh" : "40vh"}
                  >
                    <Image
                      source={box.image}
                      alt={box.label}
                      width={"100%"}
                      height={"100%"}
                      resizeMode="cover"
                    />
                  </Box>
                </Pressable>
                <Text
                  fontSize="lg"
                  color="white"
                  textAlign="center"
                  marginTop={2}
                >
                  {box.label}
                </Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};
