import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="About" component={AboutPage} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
