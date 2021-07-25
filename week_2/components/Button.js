import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Button(props) {
  return (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
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
  text: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
});
