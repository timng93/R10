import React, { Component } from "react";
import Session from "./Session";
import FavesContext from "../../context/FavesContext";
import PropTypes from "prop-types";

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20
    }
  };
  render() {
    const session = this.props.navigation.getParam("session");
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Session
            faveIds={faveIds}
            data={session}
            navigation={this.props.navigation}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

SessionContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
