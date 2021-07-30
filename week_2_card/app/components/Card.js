import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <AppText str={title} />
          <AppText str={subTitle} style={styles.text} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.45,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors["grey"],
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContainer: {
    width: "100%",
    height: "80%",
    borderRadius: 30,
  },
  textContainer: {
    backgroundColor: colors.white,
    height: "33%",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 15,
  },
  text: {
    color: colors.secondary,
    marginTop: 5,
    fontWeight: "bold",
  },
});
