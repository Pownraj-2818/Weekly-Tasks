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
import Button from "./components/Button";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import colors from "./config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewImageScreen />  */}
      {/* <Button title="LOGIN" color={colors.primary} /> */}
      <WelcomeScreen />
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
