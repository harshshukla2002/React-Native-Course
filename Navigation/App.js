import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./components/StackNavigator";
import DrawerNavigator from "./components/DrawerNavigation";
import TabNavigator from "./components/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}
