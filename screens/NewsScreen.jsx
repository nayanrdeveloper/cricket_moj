import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllNews from './AllNews';
import TopicNewsScreen from './TopicNewsScreen';
import CategoriesNewsScreen from './CategoriesNewsScreen';

const Tab = createMaterialTopTabNavigator();

export default function NewsScreen() {
  return (
    <Tab.Navigator className="mt-10">
      <Tab.Screen name="All Stories" component={AllNews} />
      <Tab.Screen name="Topics" component={TopicNewsScreen} />
      <Tab.Screen name="Categories" component={CategoriesNewsScreen} />
    </Tab.Navigator>
  )
}