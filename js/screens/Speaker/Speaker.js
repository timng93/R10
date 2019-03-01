import React, { Component } from "react";
import { View, Text, Image, ScrollView, Button, Linking } from "react-native";
import styles from "./styles";
const Speaker = props => {
  console.log(props.speaker);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Button
          style={styles.navigationButton}
          onPress={() => props.navigation.goBack()}
          title=""
        />
        <Button
          style={styles.navigationButton}
          onPress={() => props.navigation.goBack()}
          title="X"
        />
        <View style={styles.speaker}>
          <View style={styles.speakerContainer}>
            <Image style={styles.image} source={{ uri: props.speaker.image }} />
            <Text style={styles.title}>{props.speaker.name}</Text>
          </View>
          <Text style={styles.description}>{props.speaker.bio}</Text>

          <Button
            onPress={() => Linking.openURL(`${props.speaker.url}`)}
            title="Learn More on Wikipedia"
            color="#841584"
            accessibilityLabel="Learn more about this speaker on Wikipedia"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Speaker;
