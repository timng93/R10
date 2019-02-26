import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList } from "react-native";
import styles from "./styles";
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data.allConducts);
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/images/logo.png")} />
        <Text style={styles.description}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.title}>Date & Revenue</Text>
        <Text style={styles.description}>
          The R10 Conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <FlatList
          style={styles.list}
          data={this.props.data.allConducts}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "purple" }}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id + ""}
          // ItemSeparatorComponent={() => <Text>I am a separator</Text>}
          //   keyExtractor={item => item.index + ""}
        />
        <Text>&copy; RED Academy 2017</Text>
      </View>
    );
  }
}

export default About;
