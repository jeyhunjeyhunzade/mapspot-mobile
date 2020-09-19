import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import RootStackScreen from "./src/screens/RootStackScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />

      {/* <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
