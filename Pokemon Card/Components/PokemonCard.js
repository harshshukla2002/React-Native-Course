import { StyleSheet, Text, View, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

const PokemonCard = ({ pokemon }) => {
  const { name, image, type, hp, moves, weaknesses } = pokemon;
  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "600" }}>{name}</Text>
        <Text style={{ fontSize: 20 }}>❤ {hp}</Text>
      </View>
      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        style={styles.image}
        resizeMode="contain"
      />
      <View
        style={{
          ...styles.badge,
          borderColor,
        }}
      >
        <Text style={{ fontSize: 22 }}>{emoji}</Text>
        <Text style={{ fontSize: 22 }}> {type}</Text>
      </View>

      <Text style={{ fontSize: 20 }}>Moves: {moves.join(", ")}</Text>
      <Text style={{ fontSize: 20 }}>Weakness: {weaknesses.join(", ")}</Text>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: { elevation: 5 },
    }),
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 40,
  },
  badge: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
    marginVertical: 20,
    gap: 5,
  },
});
