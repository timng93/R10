import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
const Speaker = props => {
  console.log(props.speaker);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.speaker}>
        <Text style={styles.title}>{props.speaker.name}</Text>
        <Text style={styles.description}>{props.speaker.bio}</Text>
        <View>
          <Image
            style={styles.image}
            source={{ uri: props.speaker.image }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Speaker;
