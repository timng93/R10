import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    fontWeight: "300",
    paddingTop: 15,
    ...globalStyles.fonts
  },
  listTitle: {
    fontWeight: "600",
    paddingTop: 15,
    fontSize: 15,
    color: "#9963ea",
    ...globalStyles.fonts
  },
  bullet: {
    paddingTop: 15,
    paddingRight: 5,
    color: "#9963ea"
  }
});

export default styles;
