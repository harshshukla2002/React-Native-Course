import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <ActivityIndicator size={"large"} />
          <Text
            style={{ textAlign: "center", marginVertical: 10, fontSize: 18 }}
          >
            Loading...
          </Text>
        </View>
      ) : (
        <FlatList
          data={postData}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: "500" }}>Title:</Text> {item.title}
                </Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: "500" }}>Body:</Text> {item.body}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ListHeaderComponent={
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                textAlign: "center",
                margin: 20,
              }}
            >
              Posts
            </Text>
          }
          ListFooterComponent={
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                textAlign: "center",
                margin: 20,
              }}
            >
              End
            </Text>
          }
          ListEmptyComponent={
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                textAlign: "center",
                margin: 20,
              }}
            >
              No Posts Found
            </Text>
          }
          refreshing={refresh}
          onRefresh={() => {
            setRefresh(true);
            fetchData();
            setRefresh(false);
          }}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedbd2",
    padding: 20,
  },
  card: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
});
