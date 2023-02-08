import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IccRankingListScreen from "./IccRankingListScreen";

const Tab = createMaterialTopTabNavigator();

export default function IccRankingScreen() {
  return (
    <Tab.Navigator className="mt-10">
      <Tab.Screen
        name="BATSMAN"
        component={IccRankingListScreen}
        initialParams={{ playerType: "batsmen", gender: "male" }}
      />
      <Tab.Screen
        name="BOWLER"
        component={IccRankingListScreen}
        initialParams={{ playerType: "bowlers", gender: "male" }}
      />
      <Tab.Screen
        name="ALL ROUNDER"
        component={IccRankingListScreen}
        initialParams={{ playerType: "allrounders", gender: "male" }}
      />
      <Tab.Screen
        name="TEAMS"
        component={IccRankingListScreen}
        initialParams={{ playerType: "teams", gender: "male" }}
      />
    </Tab.Navigator>
  );
}
