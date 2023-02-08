import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LiveMatchesScreen from "./LiveMatchesScreen";
import RecentMatchScreen from "./RecentMatchScreen";

const Tab = createMaterialTopTabNavigator();

export default function MatchesScreen() {
  return (
    <Tab.Navigator className="mt-10">
      <Tab.Screen name="Live" component={LiveMatchesScreen} />
      <Tab.Screen name="Recent" component={RecentMatchScreen} />
    </Tab.Navigator>
  );
}
