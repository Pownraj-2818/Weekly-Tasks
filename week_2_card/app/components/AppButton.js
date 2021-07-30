import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";

export default function Button({ title, color, onPress, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 0.75,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  button: {
    width: "95%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    marginTop: 15,
  },
});
