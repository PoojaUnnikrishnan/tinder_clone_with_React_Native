import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>I'm HomeScreen</Text>
      <Button
        title="Go to chatscreen"
        onPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
};

export default HomeScreen;
