import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import pokemonData from "./data.json";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={pokemonData}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>No: {item.id}</Text>
                <Text style={styles.text}>Name: {item.name}</Text>
                <Text style={styles.text}>Type: {item.type}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          ListEmptyComponent={
            <Text
              style={{ fontSize: 30, fontWeight: "500", textAlign: "center" }}
            >
              No Item Found
            </Text>
          }
          ListHeaderComponent={
            <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>
              Pokemon List
            </Text>
          }
          ListFooterComponent={
            <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>
              Thanks
            </Text>
          }
        />
      </SafeAreaView>
      <StatusBar backgroundColor="black" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    elevation: 10,
  },
  text: {
    fontSize: 20,
  },
});
