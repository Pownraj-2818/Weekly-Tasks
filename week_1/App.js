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
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
