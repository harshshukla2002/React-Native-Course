import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

const initialState = {
  username: "",
  password: "",
};

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const HandleSubmit = () => {
    if (!username) setUsernameError("please enter username");
    if (!password) setPasswordError("please enter password");
    else {
      Alert.alert("Submitted");
      setUsername("");
      setPassword("");
      setUsernameError("");
      setPasswordError("");
    }
  };

  useEffect(() => {
    if (username) setUsernameError("");
    if (password) setPasswordError("");
  }, [username, password]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView keyboardVerticalOffset={200}>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            margin: 5,
          }}
        >
          <Image
            source={{ uri: "http://cdn.onlinewebfonts.com/svg/img_314323.png" }}
            style={{
              height: 200,
              width: 200,
              marginHorizontal: 60,
              marginVertical: 10,
            }}
          />
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 5 }}>
              UserName
            </Text>
            <TextInput
              style={styles.input}
              value={username}
              placeholder="Enter username"
              onChangeText={setUsername}
            />
            {usernameError ? (
              <Text style={{ fontSize: 18, color: "red", marginHorizontal: 5 }}>
                {usernameError}
              </Text>
            ) : null}
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 5 }}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              placeholder="Enter password"
              onChangeText={setPassword}
            />
            {passwordError ? (
              <Text style={{ fontSize: 18, color: "red", marginHorizontal: 5 }}>
                {passwordError}
              </Text>
            ) : null}
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title="Login" onPress={HandleSubmit} />
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 2,
    padding: 7,
    borderColor: "#ddd",
  },
});
