import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import Button from "./app/components/AppButton";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import colors from "./config/colors";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewImageScreen /> */}

      {/* <WelcomeScreen /> */}
      {/* <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./assets/jacket.jpg")}
      /> */}
      <ListingDetailsScreen />
      {/* <ListItem /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
