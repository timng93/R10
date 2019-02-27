import React, { Component } from "react";
import { View, Text } from "react-native";
import Session from "./Session";

export default class SessionContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    const session = this.props.navigation.getParam("session");
    console.log(session);
    return (
      <View>
        <FavesContext.Consumer>
          {({ faveIds }) => (
            <Session data={session} navigation={this.props.navigation} />
          )}
        </FavesContext.Consumer>
      </View>
    );
  }
}
