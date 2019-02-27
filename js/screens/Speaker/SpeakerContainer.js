import React, { Component } from "react";
import { View, Text } from "react-native";
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    const speaker = this.props.navigation.getParam("speaker");
    console.log(speaker);
    return (
      <View>
        <Speaker speaker={speaker} navigation={this.props.navigation} />
      </View>
    );
  }
}
