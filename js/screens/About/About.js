import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
class About extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
      console.log(this.props);
    return (
      <ScrollView style={styles.container}>
     
      </ScrollView>
    );
  }
}

export default About;
