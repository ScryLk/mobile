import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Plantel from "./Plantel";
import Competicoes from "./Competicoes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TelaTime({ route, navigation }) {
  const { nome, facanha, simbolo } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="HomeTime"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HomeTime"
        component={() => (
          <Home time={nome} facanha={facanha} simbolo={simbolo} />
        )}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Plantel"
        component={() => <Plantel time={nome} simbolo={simbolo} />}
        options={{
          tabBarLabel: "Plantel",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Competicoes"
        component={() => <Competicoes time={nome} simbolo={simbolo} />}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="trophy" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TelaTime;
