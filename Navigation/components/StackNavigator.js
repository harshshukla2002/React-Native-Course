import { Pressable, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ backgroundColor: "#caf0f8" }}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "Welcome Home",
          headerStyle: {
            backgroundColor: "plum",
          },
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("About")}>
              <Text style={{ fontSize: 18 }}>About</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="About" component={AboutPage} />
    </Stack.Navigator>
  );
};
