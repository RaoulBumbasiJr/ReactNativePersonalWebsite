import React from "react";
import {
  View,
  Text,
  Image,
  Box,
  NativeBaseProvider,
  Divider,
} from "native-base";

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
          </Box>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};
