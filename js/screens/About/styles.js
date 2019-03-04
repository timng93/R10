import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

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
    ...globalStyles.fonts
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    paddingTop: 15,
    ...globalStyles.fonts
  },
  listTitle: {
    paddingTop: 15,
    fontSize: 15,
    color: "#9963ea",
    ...globalStyles.fonts
  },
  bullet: {
    paddingTop: 15,
    paddingRight: 2,
    color: "#9963ea"
  },
  copyright: {
    paddingTop: 15,
    fontSize: 15,
    ...globalStyles.fonts
  }
});

export default styles;
