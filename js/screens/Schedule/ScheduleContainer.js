import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import FavesContext from "../../context/FavesContext";
import PropTypes from "prop-types";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
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

ScheduleContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ScheduleContainer;
