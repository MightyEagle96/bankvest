import { Stack } from "expo-router";
import { Image, StyleSheet, Text } from "react-native";

import React from "react";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="index"
        // component={require("./screens/home").default}
        // options={{ title: "Home" }}
        options={{ headerTitle: "Home" }}
      />
      <Stack.Screen
        name="users/[id]"
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <Image style={styles.image} source={{ uri: route.params.image }} />
          ),
        })}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  image: { height: 40, width: 40, borderRadius: "50%" },
});
export default _layout;
