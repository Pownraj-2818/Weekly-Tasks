import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ListItem from "../app/components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/jacket.jpg")}
          resizeMode="stretch"
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Red jacket for sale </Text>
          <Text style={[styles.text, { color: colors["secondary"] }]}>
            $100
          </Text>
        </View>
        <ListItem
          image={require("../assets/dog.jpg")}
          title="Mosh Hamedani"
          subTitle=" 5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    borderWidth: 5,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  text: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 15,
  },

  avatorContainer: {
    width: "30%",
    borderWidth: 5,
    borderRadius: 200,
  },
  avator: {
    width: "100%",
    height: "40%",
  },

  avatorText: {
    width: "100%",
    height: "80%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
