import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LiveMatchesScreen from "./LiveMatchesScreen";

import MatchesScreen from "./MatchesScreen";
import NewsScreen from "./NewsScreen";
import MoreScreen from "./MoreScreen";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Latest News" component={NewsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}
