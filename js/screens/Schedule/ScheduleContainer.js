import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
          if (loading) return <Text>Loading..</Text>;
            if (error) return console.log(error);
          return <Schedule navigation={this.props.navigation}
            data={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
