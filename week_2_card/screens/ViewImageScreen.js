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
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.icon1}>
          <MaterialCommunityIcons name="close" size={30} color="white" />
        </View>
        <View style={styles.icon2}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color="white"
          />
        </View>
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
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
  container1: {
    flex: 0.5,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 17,
  },
  image: {
    width: "100%",
    height: "80%",
  },
  icon1: {
    // backgroundColor: color.primary,

    padding: 12,
  },
  icon2: {
    // backgroundColor: color.secondary,
    padding: 12,
  },
});
