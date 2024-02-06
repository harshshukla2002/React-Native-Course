import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  StatusBar,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* image and pressable with modal */}
          <Pressable onPress={() => setShow(true)}>
            <Image
              source={{
                uri: "http://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Images.jpg",
              }}
              style={styles.image}
            />
          </Pressable>
          <Modal
            visible={show}
            animationType="slide"
            presentationStyle="formSheet"
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              <Text style={{ fontSize: 20, margin: 10 }}>This is Image</Text>
              <Button
                title="Close"
                onPress={() => setShow(false)}
                color={"red"}
              />
            </View>
          </Modal>
          <Text style={styles.text}>
            Hello <Text style={{ color: "black", fontWeight: "400" }}>Dog</Text>
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              marginVertical: 10,
              color: "blue",
            }}
          >
            Description About Dogs:{" "}
          </Text>
          <Text style={{ fontSize: 18 }}>
            Dog, (Canis lupus familiaris), domestic mammal of the family Canidae
            (order Carnivora). It is a subspecies of the gray wolf (Canis lupus)
            and is related to foxes and jackals. The dog is one of the two most
            ubiquitous and most popular domestic animals in the world (the cat
            is the other). For more than 12,000 years it has lived with humans
            as a hunting companion, protector, object of scorn or adoration, and
            friend. The dog evolved from the gray wolf into more than 400
            distinct breeds. Human beings have played a major role in creating
            dogs that fulfill distinct societal needs. Through the most
            rudimentary form of genetic engineering, dogs were bred to
            accentuate instincts that were evident from their earliest
            encounters with humans. Although details about the evolution of dogs
            are uncertain, the first dogs were hunters with keen senses of sight
            and smell. Humans developed these instincts and created new breeds
            as need or desire arose. Dogs are regarded differently in different
            parts of the world. Characteristics of loyalty, friendship,
            protectiveness, and affection have earned dogs an important position
            in Western society, and in the United States and Europe the care and
            feeding of dogs has become a multibillion-dollar business. Western
            civilization has given the relationship between human and dog great
            importance, but, in some of the developing nations and in many areas
            of Asia, dogs are not held in the same esteem. In some areas of the
            world, dogs are used as guards or beasts of burden or even for food,
            whereas in the United States and Europe dogs are protected and
            admired. In ancient Egypt during the days of the pharaohs, dogs were
            considered to be sacred.
          </Text>
          {/* button to show alert */}
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Know Fact About Dog"
              onPress={() =>
                Alert.alert("Fact", "Dog has better smell sense", [
                  { text: "Done" },
                ])
              }
              color={"blue"}
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor={"blue"} />
        {/* loading indicator */}
        {/* <ActivityIndicator size={"large"} color={"blue"} /> */}

        {/* box shadow */}
        <View>
          <Text
            style={{
              ...styles.boxShadow,
              backgroundColor: "white",
              padding: 10,
            }}
          >
            There are many Dogs breed which people make them as pet
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // this is when we want something only on 1 device
    // padding: Platform.OS === "android" ? 25 : 0,
    textAlign: "left",
    backgroundColor: "#fffff0",
  },
  text: {
    color: "blue",
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "500",
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 15,
  },
  // this will only work for IOS
  // boxShadow: {
  //   shadowColor: "blue",
  //   shadowOffset: {
  //     width: 6,
  //     height: 6,
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 3,
  // },

  boxShadow: {
    elevation: 10,
  },
});
