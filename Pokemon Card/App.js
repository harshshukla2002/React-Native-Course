import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import PokemonCard from "./Components/PokemonCard";

const pokemonData = [
  {
    name: "Charmander",
    image: require("./Images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  },
  {
    name: "Squirtle",
    image: require("./Images/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  },
  {
    name: "Bulbasaur",
    image: require("./Images/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  },
  {
    name: "Pikachu",
    image: require("./Images/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  },
];

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text
            style={{
              fontSize: 33,
              marginVertical: 20,
              fontWeight: "500",
              textAlign: "center",
              color: "green",
            }}
          >
            Pokemons
          </Text>
          {pokemonData.map((pokemon, index) => {
            console.log(pokemon);
            return <PokemonCard key={index} pokemon={pokemon} />;
          })}
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor={"black"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#f5f5f5",
  },
});
