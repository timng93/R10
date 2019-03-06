import React, { Component } from "react";
import Faves from "./Faves";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import { View, ActivityIndicator, Text } from "react-native";
import PropTypes from "prop-types";

const query = gql`
  query filterSessions($filter: SessionFilter) {
    allSessions(filter: $filter) {
      id
      description
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
`;
export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 20
    }
  };

  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <View>
            <Query
              query={query}
              variables={{
                filter: {
                  id_in: faveIds
                }
              }}
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
                if (data.allSessions.length === 0) {
                  return (
                    <View>
                      <Text
                        style={{
                          color: "#FF0000",
                          fontSize: 20,
                          padding: 10,
                        }}
                      >
                        There are no faves yet. Please pick some.
                      </Text>
                    </View>
                  );
                } else {
                  return (
                    <Faves
                      data={formatSessionData(data.allSessions)}
                      faveIds={faveIds}
                      navigation={this.props.navigation}
                    />
                  );
                }
              }}
            </Query>
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

FavesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
