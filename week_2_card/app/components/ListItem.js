import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../../config/colors";

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Image source={image} resizeMode="cover" style={styles.image} />

        <View style={styles.text}>
          <AppText str={title} />
          <AppText str={subTitle} style={{ color: colors["gray"] }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "25%",
    height: "100%",
    borderRadius: 100,
  },
  text: {
    padding: 13,
  },
  listItem: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 30,
  },
});
