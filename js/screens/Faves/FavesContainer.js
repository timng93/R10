import React, {Component} from "react";
import Faves from "./Faves";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";
import {formatSessionData} from "../../lib/helpers/dataFormatHelpers";
import {View, ActivityIndicator, Text} from "react-native";
import PropTypes from "prop-types";

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
      <Query
        query={gql`
          {
            allSessions {
              id
              title
              description
              location
              startTime
              speaker {
                bio
                id
                image
                name
                url
              }
            }
          }
        `}
      >
        {({loading, error, data}) => {
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
              {({faveIds, setFaveId, removeFaveId}) => {
                let filterSessions = data.allSessions.filter(session => {
                  return faveIds.includes(session.id);
                });

                if (filterSessions.length === 0) {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          color: "#FF0000",
                          fontSize: 20,
                          padding: 100
                        }}
                      >
                        There are no faves yet. Please pick some.
                      </Text>
                    </View>
                  );
                } else {
                  return (
                    <Faves
                      data={formatSessionData(filterSessions)}
                      faveIds={faveIds}
                      navigation={this.props.navigation}
                      setFaveId={setFaveId}
                      removeFaveId={removeFaveId}
                    />
                  );
                }
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

FavesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
