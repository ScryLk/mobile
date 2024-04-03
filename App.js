import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home/Home";
import TelaTime from "./src/TelasTime/TelaTime";
import LoginScreen from "./src/TelaLogin/Login";
import RegistroScreen from "./src/TelaLogin/Registro";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState("Login");

  useEffect(() => {
    const fetchInitialRoute = async () => {
      try {
        const manterAcessado = await AsyncStorage.getItem('ManterAcessado');
        if (manterAcessado !== null) {
          setInitialRoute(JSON.parse(manterAcessado) ? "Home" : "Login");
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchInitialRoute();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TelaTime" component={TelaTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});