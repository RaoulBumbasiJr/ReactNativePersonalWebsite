import React from "react";
import {
  View,
  Box,
  Text,
  Image,
  PresenceTransition,
  Pressable,
} from "native-base";
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

  const handleOpenURL = (url) => {
    Linking.openURL(url);
  };
  return (
    <View
      flex={0}
      position={"relative"}
      width={"100%"}
      minH={"100vh"}
      backgroundColor={"black"}
    >
      <Text color={"white"} textAlign={"center"}>
        Projects
      </Text>

      {Array.from({ length: 2 }).map((_, rowIndex) => (
        <View key={rowIndex} flexDirection="row" justifyContent="space-around">
          {boxes.slice(rowIndex * 3, rowIndex * 3 + 3).map((box, index) => (
            <View key={index} style={{ alignItems: "center", width: "30%" }}>
              <Pressable
                borderColor={"white"}
                borderWidth={3}
                width={"100%"}
                height={"40vh"}
                margin={2}
                alignItems="center"
                justifyContent="center"
                onPress={() => handleOpenURL(box.url)}
              >
                <Box
                  borderColor={"white"}
                  borderWidth={3}
                  width={"100%"}
                  height={"40vh"}
                  margin={2}
                  alignItems="center"
                  justifyContent="center"
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
          ))}
        </View>
      ))}
    </View>
  );
};
