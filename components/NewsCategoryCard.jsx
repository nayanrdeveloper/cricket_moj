import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function NewsCategoryCard({ id, name, description }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CategoryTopicNewsStory", { newsType: "category", id })
      }
      className="bg-white px-2 py-2 shadow border border-gray-200 rounded-md space-y-1 mb-1"
    >
      <Text className="text-gray-600 font-semibold text-xl">{name}</Text>
      <Text className="text-gray-600">{description}</Text>
    </TouchableOpacity>
  );
}
