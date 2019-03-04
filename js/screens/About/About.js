import React from "react";
import { Text, Image, ScrollView, FlatList, View } from "react-native";
import styles from "./styles";
import CollapsibleConduct from "../../components/CollapsibleConduct";
import PropTypes from "prop-types";

const About = ({ data }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.itemSeparator} />
        <Text style={styles.description}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.title}>Date & Venue</Text>
        <Text style={styles.description}>
          The R10 Conference will take place on Tuesday, June 27, 2019 in
          Vancouver, BC.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
        <FlatList
          style={styles.list}
          data={data.allConducts}
          renderItem={({ item }) => <CollapsibleConduct item={item} />}
          keyExtractor={(item, index) => item + index}
        />
        <View style={styles.itemSeparator} />
        <Text style={styles.copyright}>&copy; RED Academy 2019</Text>
      </View>
    </ScrollView>
  );
};
About.propTypes = {
  data: PropTypes.shape({
    allConducts: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default About;
