import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View } from "react-native";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ flex: 1, alignItems: "center", paddingTop: "30%" }}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={{ flex: 0.2 }}
          resizeMode="contain"
        />
        <Text>Sell What you Don't need</Text>
      </ImageBackground>
      <View style={{ backgroundColor: colors.red, flex: 0.12 }}></View>
      <View style={{ backgroundColor: colors.green, flex: 0.12 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
