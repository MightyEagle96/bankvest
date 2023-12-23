import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { httpService } from "../../httpService";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function UserPage() {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const getUser = async () => {
    setLoading(true);
    const { data, error } = await httpService(`users/${id}`);
    if (data) {
      console.log(data);
      setUser(data);
    }
    if (error) console.log(error);
    setLoading(false);
  };

  const getTodos = async () => {
    const { data, error } = await httpService(`todos?userId=${id}`);

    if (data) {
      setTodos(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getTodos();
  }, []);
  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator />}
      {user && (
        <View>
          <View style={styles.address}>
            <View>
              <Text
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: "700",
                  marginBottom: 10,
                }}
              >
                {user.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "300",
                  marginBottom: 20,
                }}
              >
                {user.username}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 35, color: "#3a4750", fontWeight: "800" }}>
              Todos
            </Text>

            <FlatList
              style={{ marginTop: 20, marginBottom: 20 }}
              data={todos}
              renderItem={({ item }) => <TodoItem todo={item} />}
              horizontal
            />
            <View>
              <Text
                style={{ fontWeight: "700", fontSize: 40, color: "#163172" }}
              >
                <MaterialCommunityIcons
                  name="reminder"
                  size={40}
                  color="#163172"
                />
                : 29
              </Text>
              <Text>
                <MaterialIcons name="remove-done" size={24} color="#be3144" />
              </Text>
              <Text>
                <MaterialIcons name="done-all" size={24} color="#35bcbf" />: 17
              </Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

function TodoItem({ todo }) {
  return (
    <View style={styles.todo}>
      <View>
        <Text style={{ textTransform: "capitalize", fontSize: 20 }}>
          {todo.title}
        </Text>
      </View>
      <View>
        {todo.completed ? (
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
              <MaterialIcons name="done-all" size={24} color="#35bcbf" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontWeight: "300", fontSize: 13 }}>COMPLETED</Text>
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
              <MaterialIcons name="remove-done" size={24} color="#be3144" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontWeight: "300", fontSize: 13 }}>
                UNCOMPLETED
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  address: {
    backgroundColor: "#be3144",
    padding: 20,
    color: "#fff",
    borderRadius: 10,
    shadowRadius: 50,
    marginBottom: 30,
  },
  todo: {
    //borderWidth: 0.5,
    padding: 20,
    marginRight: 30,
    maxWidth: 250,
    minHeight: 130,

    borderRadius: 20,
    backgroundColor: "#f2f2f2",

    justifyContent: "space-between",

    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 40,
  },
});
