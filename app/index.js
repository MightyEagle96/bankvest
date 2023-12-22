import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { httpService } from "../httpService";
import { SafeAreaView } from "react-native-safe-area-context";
import { peopleImages } from "../peopleImages";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    const { data, error } = await httpService("users");
    if (data) {
      setUsers(data);
    }
    if (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserView item={item} />}
      />
    </SafeAreaView>
  );
}

function UserView({ item }) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/users/[id]",
          params: {
            id: item.id,
            name: item.name.split(" ")[0],
            image: peopleImages.find((c) => c.id === item.id).photo || "",
          },
        })
      }
    >
      <View
        style={{
          marginBottom: 10,
          borderBottomColor: "#5c5470",
          borderBottomWidth: 0.2,
          width: "95%",
        }}
      >
        <View style={styles.userThumbnail}>
          <View style={{ marginEnd: 15 }}>
            <Image
              style={styles.image}
              source={{
                uri: peopleImages.find((c) => c.id === item.id).photo || "",
              }}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: "#fff" },
  name: { fontSize: 22, fontWeight: "500", color: "#34495e" },
  email: { color: "#22313f" },
  image: {
    height: 80,
    width: 80,
    borderRadius: "50%",
  },
  userThumbnail: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
