import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const NetworkFailure = () => {
  return (
    <View>
      <Text>
        <Feather name="wifi-off" size={24} color="#be3144" /> {"   "}Cannot
        connect to the internet
      </Text>
    </View>
  );
};

export default NetworkFailure;
