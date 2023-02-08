import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { store } from "./store";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import CategoryTopicNewsStory from "./screens/CategoryTopicNewsStory";
import IccRankingScreen from "./screens/moreScreens/IccRankingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
          <Stack.Screen
            name="CategoryTopicNewsStory"
            component={CategoryTopicNewsStory}
          />
          <Stack.Screen
            name="IccRanking"
            component={IccRankingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
