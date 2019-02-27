import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FavesContext.Consumer>
          {({ faveIds }) => <Text> Faves </Text>}
        </FavesContext.Consumer>
      </View>
    );
  }
}
