import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  LayoutAnimation
} from "react-native";
import styles from "./styles";

class CollapsableCodeOfConduct extends Component {
  state = { isOpen: false };

  _toggle() {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { styles, item } = this.props;
    return (
      <View>
        <Text onPress={() => this._toggle()} style={{ color: "purple" }}>
          {!this.state.isOpen ? "+" : "-"}
          {item.title}
        </Text>
        {this.state.isOpen ? <Text style={styles.description}>{item.description}</Text> : null}
      </View>
    );
  }
}
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data.allConducts);
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.description}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.title}>Date & Revenue</Text>
        <Text style={styles.description}>
          The R10 Conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
        <FlatList
          style={styles.list}
          data={this.props.data.allConducts}
          renderItem={({ item }) => (
            <CollapsableCodeOfConduct item={item} styles={styles} />
          )}
          keyExtractor={item => item.id + ""}
          // ItemSeparatorComponent={() => <Text>I am a separator</Text>}
          //   keyExtractor={item => item.index + ""}
        />
        <Text>&copy; RED Academy 2019</Text>
      </ScrollView>
    );
  }
}

export default About;
