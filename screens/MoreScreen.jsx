import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MoreScreen() {
  const moreScreenList = [
    {
      id: 1,
      icon: "",
      title: "Browse Series",
      screen: "",
      type: "",
    },
    {
      id: 2,
      icon: "",
      title: "Browse Team",
      screen: "",
      type: "",
    },
    {
      id: 3,
      icon: "",
      title: "ICC Ranking - Men",
      screen: "IccRanking",
      type: "men",
    },
    {
      id: 4,
      icon: "",
      title: "ICC Ranking - Women",
      screen: "",
      type: "",
    },
    {
      id: 5,
      icon: "",
      title: "Records",
      screen: "",
      type: "",
    },
  ];
  const navigation = useNavigation();
  return (
    <View className="mt-10">
      {moreScreenList.map((moreScreenItem) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(moreScreenItem.screen, {
                type: moreScreenItem.type,
              })
            }
            key={moreScreenItem.id}
            className="px-2 py-2 border-b border-gray-600"
          >
            <Text>{moreScreenItem.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
