import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  gradient: {
    margin: 15,
    borderRadius: 25,
    padding: 5
  },
  buttonTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    ...globalStyles.fonts
  }
});

export default styles;
