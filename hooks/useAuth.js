import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth"; //for google authentication
const AuthContext = createContext({}); //create data layer, react context API

export const AuthProvider = ({ children }) => {
  //auth provider takes children which means the child elements.
  const signInWithGoogle = async () => {
    await Google.logInAsync();
  };
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuth() {
  return useContext(AuthContext);
}
//here useContext is a hook for making data accessible to whole app
