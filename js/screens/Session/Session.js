import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import FavesContext from "../../context/FavesContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

const getTypedIcon = name => {
  return Platform.OS === "ios" ? `ios-${name}` : `md-${name}`;
};

const Session = props => {
  console.log(props.data);
  const isFave = props.faveIds.find(fave => fave === props.data.id);
  console.log(isFave);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.speaker}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{props.data.location}</Text>
          {props.faveIds.find(fave => fave === props.data.id) && (
            <Ionicons
              style={styles.icon}
              size={20}
              name={getTypedIcon("heart")}
            />
          )}
        </View>
        <Text style={styles.title}>{props.data.title}</Text>

        <Text style={styles.time}>
          {moment(props.data.startTime).format("LT")}
        </Text>
        <Text style={styles.description}>{props.data.description}</Text>
        <Text style={styles.presenter}>Presented by:</Text>
        <View>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              props.navigation.navigate("Speaker", {
                speaker: props.data.speaker
              });
            }}
          >
            <View style={styles.speakerContainer}>
              <Image
                style={styles.image}
                source={{ uri: props.data.speaker.image }}
              />
              <Text style={styles.name}>{props.data.speaker.name}</Text>
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
                        removeFaveId(props.data.id);
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
                        setFaveId(props.data.id);
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

export default Session;
