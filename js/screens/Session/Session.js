import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import moment from "moment";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
const Session = props => {
    console.log(props.data)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.speaker}>
          <Text style={styles.location}>{props.data.location}</Text>
        <Text style={styles.title}>{props.data.title}</Text>
        <Text style={styles.time}>
          {moment(props.data.startTime).format("h:mm a")}
        </Text>
        <Text style={styles.description}>{props.data.description}</Text>
        <Text style={styles.location}>Presented by:</Text>
        <View>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={e => {
                props.navigation.navigate("Speaker", {
                 speaker: props.data.speaker
                });
              }}
          >
            <Image
              style={styles.image}
              source={{ uri: props.data.speaker.image }}
            />
            <Text style={styles.name}>{props.data.speaker.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Session;
