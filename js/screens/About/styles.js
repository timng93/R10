import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    marginTop: 20,
    height: 60,
    width: 240
  },
  mainContent: {
    padding: 10
  },
  list: {
    color: "#F5FCFF"
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginTop: 15
  },
  title: {
    fontSize: 22,
    paddingTop: 15,
    fontWeight: "700",
    fontFamily: "Montserrat"
  },
  description: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: "300",
    paddingTop: 15
  },
  listTitle: {
    paddingTop: 15,
    fontFamily: "Montserrat",
    fontSize: 15,
    color: "#9963ea"
  },
  bullet: {
    paddingTop: 15,
    paddingRight: 2,
    color: "#9963ea"
  },
  copyright: {
    fontFamily: "Montserrat",
    paddingTop: 15,
    fontSize: 15
  }
});

export default styles;
