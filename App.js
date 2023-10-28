import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./src/navigation/HomeScreen"
import {SignInScreen} from "./src/navigation/SignInScreen"
import {SignUpScreen} from "./src/navigation/SignUpScreen"
import {ProfileScreen} from "./src/navigation/ProfileScreen"
import {useState} from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const isSignedIn = useState(true);

  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={ProfileScreen} />
          <Stack.Screen options={{title: 'SignIn'}} name="SignIn" component={SignInScreen} />
          <Stack.Screen options={{title: 'SignUp'}} name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}


