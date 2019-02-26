import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
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
