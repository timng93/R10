import React, { Component } from "react";
import Maps from "./Maps";
import { Text, Platform } from "react-native";

export default class MapsContainer extends Component {
  static navigationOptions = {
    title: "Map",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return Platform.OS === "ios" ? <Maps /> : <Text>Map</Text>;
  }
}
