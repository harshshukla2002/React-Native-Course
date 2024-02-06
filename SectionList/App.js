import { SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import pokemonData from "./data.json";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <SectionList
          sections={pokemonData}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={{ fontSize: 25, borderBottomWidth: 2 }}>
              {section.type}
            </Text>
          )}
          SectionSeparatorComponent={() => <View style={{ height: 15 }} />}
        />
      </View>
      <StatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 20,
  },
  card: {
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});
