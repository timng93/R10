import React, { Component } from "react";
import Faves from "./Faves";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";
import { formatSessionData } from "../../lib/helpers/dataFormatHelpers";
import { View, Text } from "react-native";

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
                if (loading) return <Text>Loading..</Text>;
                if (error) return console.log(error);
                return (
                  <Faves
                    data={formatSessionData(data.allSessions)}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
                  />
                );
              }}
            </Query>
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}
