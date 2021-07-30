import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
} from "react-native";
import colors from "../config/colors";
import AppButton from "../app/components/AppButton";

export default function WelcomeScreen() {
  var login = () => {
    console.log("Hello I am Login");
    Alert.alert("Alert", "Are you sure you want to Login ?", [
      {
        text: "Yes",
        onPress: () => console.log("Yes you are going to login."),
      },
      {
        text: "No",
        onPress: () => console.log("No you are not going to login!"),
      },
    ]);
  };

  var register = () => {
    console.log("Hello I am Register");
    Alert.alert("Alert", "Are you sure you want to Login ?", [
      {
        text: "Yes",
        onPress: () => console.log("Yes you are going to register."),
      },
      {
        text: "No",
        onPress: () => console.log("No you are not going to register!"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={3}
        source={require("../assets/background.jpg")}
        style={{ flex: 1, alignItems: "center" }}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.text}>Sell What you Don't need</Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            title="LOGIN"
            style={styles.button}
            onPress={login}
            color="primary"
          />
          <AppButton
            title="REGISTER"
            style={styles.button}
            onPress={register}
            color="secondary"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 300,
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    top: "75%",
  },
  button: {
    color: "white",
    fontSize: 17,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});
