import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./navigationLayout";
import SpeakerModal from "../screens/Speaker";

export default createAppContainer(
  createStackNavigator(
    {
      layout: NavigationLayout,
      speaker: SpeakerModal
    },
    {
      mode: "modal",
      headerMode: "none"
    }
  )
);
