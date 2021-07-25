import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View } from "react-native";
import colors from "../config/colors";
import Button from "../components/Button";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={3}
        source={require("../assets/background.jpg")}
        style={{ flex: 1, alignItems: "center", paddingTop: "30%" }}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Sell What you Don't need</Text>

        <Button title="LOGIN" color={colors.primary} />
        <Button title="REGISTER" color={colors.secondary} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 300,
  },
});
