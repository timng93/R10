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
      <View style={{ background: "red" }}>
        <FlatList
          style={styles.list}
          data={this.props.data.allConducts}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "white" }} >{item.title}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />
          )}
          keyExtractor={item => item.id + ""}
          // ItemSeparatorComponent={() => <Text>I am a separator</Text>}
        //   keyExtractor={item => item.index + ""}
        />
      </View>
    );
  }
}

export default About;
