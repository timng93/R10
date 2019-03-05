import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import About from "./About";
import globalStyles from "../../config/styles";
import PropTypes from "prop-types";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20,
      ...globalStyles.fonts
    }
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              description
              id
              order
              title
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <ActivityIndicator
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            );
          if (error) return console.log(error);
          return <About data={data} />;
        }}
      </Query>
    );
  }
}

AboutContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
