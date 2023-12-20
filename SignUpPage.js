import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function SignUpPage() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.signUpText}>CREATE ACCOUNT</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "height"}
        style={styles.formPad}
      >
        <View>
          <Text style={{ marginBottom: 5, color: "#606470" }}>First Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            selectionColor={"#1e56a0"}
            onChangeText={(e) => setLoginData({ ...loginData, username: e })}
          />
        </View>
        <View>
          <Text style={{ marginBottom: 5, color: "#606470" }}>Last Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            selectionColor={"#1e56a0"}
            onChangeText={(e) => setLoginData({ ...loginData, username: e })}
          />
        </View>
        <View>
          <Text style={{ marginBottom: 5, color: "#606470" }}>
            Email Address:
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            selectionColor={"#1e56a0"}
            onChangeText={(e) => setLoginData({ ...loginData, username: e })}
          />
        </View>
        <View>
          <Text style={{ marginBottom: 5, color: "#606470" }}>Password:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            selectionColor={"#1e56a0"}
            onChangeText={(e) => setLoginData({ ...loginData, username: e })}
          />
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ marginBottom: 5, color: "#606470" }}>
            Confirm Password:
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            selectionColor={"#1e56a0"}
            onChangeText={(e) => setLoginData({ ...loginData, username: e })}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 80 },
  signUpText: {
    fontSize: 40,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#1e56a0",
  },
  textInput: {
    height: 50,

    borderWidth: 1.5,
    padding: 10,
    borderRadius: 5,
    borderColor: "#163172",
    marginBottom: 20,
    fontSize: 16,
  },
  formPad: { padding: 20 },
  inputForm: {},
});
