import React, { Component } from "react";
import { View, Text, Image, ScrollView, Button, Linking } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
const Speaker = props => {
  console.log(props.speaker);
  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => props.navigation.goBack()} title='Back Button'/>
      <View style={styles.speaker}>
        <Text style={styles.title}>{props.speaker.name}</Text>
        <Text style={styles.description}>{props.speaker.bio}</Text>
        <View>
          <Image style={styles.image} source={{ uri: props.speaker.image }} />
        </View>
        <Button
         onPress={() => Linking.openURL(`${props.speaker.url}`)}
         title="Learn More on Wikipedia"
         color="#841584"
         accessibilityLabel="Learn more about this speaker on Wikipedia"
       />
      </View>
    </ScrollView>
  );
};

export default Speaker;
