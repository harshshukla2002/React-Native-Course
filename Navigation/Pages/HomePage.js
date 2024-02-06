import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 25, margin: 10 }}>Home Page</Text>
      {/* <Button
        title="Go To About"
        onPress={() => navigation.navigate("About")}
      /> */}
    </View>
  );
};

export default HomePage;
