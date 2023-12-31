import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
export default function LoginPage({ navigation }) {
  const [loginData, setLoginData] = useState({});
  return (
    <>
      {Platform.OS === "ios" ? (
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.logo}>
              <FontAwesome5 name="piggy-bank" size={100} color="#1e56a0" />
            </View>
            <View style={{ marginBottom: 40 }}>
              <Text style={styles.productTitle}>BANK VEST</Text>
            </View>

            <View style={styles.textView}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                selectionColor={"#1e56a0"}
                onChangeText={(e) =>
                  setLoginData({ ...loginData, username: e })
                }
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                selectionColor={"#1e56a0"}
                secureTextEntry={true}
                onChangeText={(e) =>
                  setLoginData({ ...loginData, password: e })
                }
              />
            </View>
            <View style={styles.loginButtonView}>
              <TouchableOpacity onPress={() => console.log(loginData)}>
                <View style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: "#3186b2" }}>
                  Don't have an account? Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </>
      ) : (
        <View
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.logo}>
            <FontAwesome5 name="piggy-bank" size={100} color="#1e56a0" />
          </View>
          <View style={{ marginBottom: 40 }}>
            <Text style={styles.productTitle}>BANK VEST</Text>
          </View>

          <View style={styles.textView}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              selectionColor={"#1e56a0"}
              onChangeText={(e) => setLoginData({ ...loginData, username: e })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              selectionColor={"#1e56a0"}
              secureTextEntry={true}
              onChangeText={(e) => setLoginData({ ...loginData, password: e })}
            />
          </View>
          <View style={styles.loginButtonView}>
            <TouchableOpacity onPress={() => console.log(loginData)}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "#3186b2" }}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    marginBottom: 30,
  },
  productTitle: {
    fontSize: 24,
    color: "#1e56a0",
  },
  textInput: {
    height: 50,

    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    borderColor: "#163172",
    marginBottom: 20,
    fontSize: 16,
  },
  textView: {
    width: "90%",
  },
  loginButtonView: { width: "40%" },
  loginButton: {
    backgroundColor: "#f76b8a",
    padding: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "#fffafa",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
