import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  const { user } = useAuth(); //user is accessed from here because we wrapped Auth Provider around stack navigator, so that its available around whole app.
  console.log(user);
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="login" onPress={signInWithGoogle}></Button>
    </View>
  );
};

export default LoginScreen;
