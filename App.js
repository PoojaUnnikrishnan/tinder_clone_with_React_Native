// import tw from "tailwind-react-native-classnames";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/useAuth";
export default function App() {
  return (
    <NavigationContainer>
      {/* Navigaton container is used to wrap the stack navigator */}
      <AuthProvider>
        {/* Auth provider is a HOC. it has all authentication process */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
