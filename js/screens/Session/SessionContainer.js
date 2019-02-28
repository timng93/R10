import React, { Component } from "react";
import { View, Text } from "react-native";
import Session from "./Session";
import FavesContext from "../../context/FavesContext";

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    // headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20
    }
  };
  render() {
    const session = this.props.navigation.getParam("session");
    console.log(session);
    return (
      <View>
        <FavesContext.Consumer>
          {({ faveIds }) => (
            <Session
              faveIds={faveIds}
              data={session}
              navigation={this.props.navigation}
            />
          )}
        </FavesContext.Consumer>
      </View>
    );
  }
}
