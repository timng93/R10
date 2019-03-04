import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";
import PropTypes from "prop-types";

const getTypedIcon = name => {
  return Platform.OS === "ios" ? `ios-${name}` : `md-${name}`;
};

const Session = ({ data, navigation, faveIds }) => {
  const isFave = faveIds.find(fave => fave === data.id);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.speaker}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{data.location}</Text>
          {faveIds.find(fave => fave === data.id) && (
            <Ionicons
              style={styles.icon}
              size={20}
              name={getTypedIcon("heart")}
            />
          )}
        </View>
        <Text style={styles.title}>{data.title}</Text>

        <Text style={styles.time}>{moment(data.startTime).format("LT")}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.presenter}>Presented by:</Text>
        <View>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              navigation.navigate("Speaker", {
                speaker: data.speaker
              });
            }}
          >
            <View style={styles.speakerContainer}>
              <Image
                style={styles.image}
                source={{ uri: data.speaker.image }}
              />
              <Text style={styles.name}>{data.speaker.name}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.itemSeparator} />

          <View>
            <FavesContext.Consumer>
              {({ setFaveId, removeFaveId }) => (
                <View>
                  {isFave ? (
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() => {
                        removeFaveId(data.id);
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#8797D6", "#9963ea"]}
                        style={styles.linearGradient}
                      >
                        <Text style={styles.buttonText}>Remove From Faves</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() => {
                        setFaveId(data.id);
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#8797D6", "#9963ea"]}
                        style={styles.linearGradient}
                      >
                        <Text style={styles.buttonText}>Add To Faves</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </FavesContext.Consumer>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

Session.propTypes = {
  data: PropTypes.object.isRequired,
  faveIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired
};

export default Session;
