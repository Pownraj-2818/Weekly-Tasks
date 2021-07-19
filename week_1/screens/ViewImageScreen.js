import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
} from "react-native";
import color from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 17,
        }}
      >
        <View style={{ backgroundColor: color.red, flex: 0.15 }}></View>
        <View style={{ backgroundColor: color.green, flex: 0.15 }}></View>
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={{ width: "100%", height: "80%" }}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : StatusBar.currentHeight + 3,
  },
});
