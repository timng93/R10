import { StyleSheet, Platform } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e6e6e6",
    padding: 10,
    fontWeight: "600",
    ...globalStyles.fonts,
    ...Platform.select({
      ios: {
        textTransform: "uppercase"
      }
    })
  },
  items: {
    padding: 8
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    padding: 5,
    ...globalStyles.fonts
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
  },
  location: {
    fontWeight: "900",
    fontSize: 18,
    color: "#999999",
    ...globalStyles.fonts
  },
  icon: {
    color: "#cf392a"
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#e6e6e6"
  }
});

export default styles;
