import { View, Text, Image } from "react-native";
import React from "react";

export default function PlayerRankingCard({
  id,
  name,
  rank,
  points,
  faceImageId,
  country,
  rating,
}) {
  return (
    <View
      key={id}
      className="flex-row items-center py-2 border-b border-gray-300"
    >
      <View className="w-5">
        <Text>{rank}</Text>
      </View>
      <View className="flex-row items-center ml-5 w-60 space-x-2">
        <View>
          <Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/1582311159910215683/doSdYa8e_400x400.jpg",
            }}
            className="h-10 w-10 rounded-full"
          />
        </View>
        <View>
          <Text className="text-lg">{name}</Text>
          <Text>{country}</Text>
        </View>
      </View>
      <View className="ml-5">
        <Text>{points}</Text>
      </View>
    </View>
  );
}
