import React, { Component } from "react";
import Map from "./Map";
import { Text, Platform } from "react-native";
import globalStyles from '../../config/styles'

export default class MapContainer extends Component {
  static navigationOptions = {
    title: "Map",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20,
      ...globalStyles.fonts
    }
  };

  render() {
    return Platform.OS === "ios" ? <Map /> : <Text>Map</Text>;
  }
}
