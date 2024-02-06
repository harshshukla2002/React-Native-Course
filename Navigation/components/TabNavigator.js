import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutPage}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contact-page" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stack Nav"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="stacked-bar-chart" size={25} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
