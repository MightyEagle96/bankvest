import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import useFetch from "./hooks/useFetch";
import { SafeAreaView } from "react-native-safe-area-context";
import { httpService } from "./httpService";

export default function SignUpPage() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    const { data, error } = await httpService("todos");
    if (data) {
      setTodos(data);
    }
    setLoading(false);
  };

  const getUsers = async () => {
    setLoading(true);
    const { data, error } = await httpService("users");

    if (data) setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getTodos();
    getUsers();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text>TRYOUT</Text>
      </View>
      {loading && <ActivityIndicator />}
      <SafeAreaView style={{ marginBottom: 30, marginTop: 30 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={users}
          horizontal
          renderItem={({ item }) => <UserCard item={item} />}
        />
      </SafeAreaView>
      <SafeAreaView>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoCard item={item} />}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 30 },
  personCard: { padding: 30 },
  name: { fontWeight: "700" },
  email: { fontWeight: "200" },
});

function TodoCard({ item }) {
  return (
    <TouchableOpacity>
      <View style={styles.personCard}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function UserCard({ item }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#385170",
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <View>
        <Text style={{ color: "#ececec", fontSize: 18 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
