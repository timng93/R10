import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import About from "./About"

export default class AboutContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "About",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20
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
          //   if (loading) return <Loading />;
        //   if (error) return console.log(error);
          return <About data={data} />;
        }}
      </Query>
    );
  }
}
