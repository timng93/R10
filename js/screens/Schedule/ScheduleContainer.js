import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import FavesContext from "../../context/FavesContext";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Schedule",
    // headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20
    }
  };

  render() {
    console.log(this.props);
    return (
      <Query
        query={gql`
          {
            allSessions {
              description
              id
              location
              speaker {
                bio
                id
                image
                name
                url
              }
              startTime
              title
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return console.log(error);
          return (
            <FavesContext.Consumer>
              {({ faveIds }) => (
                <Schedule
                  faveIds={faveIds}
                  navigation={this.props.navigation}
                  data={formatSessionData(data.allSessions)}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
