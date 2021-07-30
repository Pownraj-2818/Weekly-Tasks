import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppText({ str, style }) {
  return <Text style={style}>{str}</Text>;
}

const styles = StyleSheet.create({});
