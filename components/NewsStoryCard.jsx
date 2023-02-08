import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useGetImageByIdQuery } from "../features/imageApi";
import { useNavigation } from "@react-navigation/native";

export default function NewsStoryCard({ id, intro, heading, image, pubTime }) {
  // const { data, error, isLoading } = useGetImageByIdQuery(image);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsDetails", {id})}
      className="bg-white px-2 py-2 shadow border border-gray-200 rounded-md space-y-1 mb-1"
    >
      <View className="flex-row space-x-2">
        <View>
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-vector/photo-graphic-editor-on-computer-600w-1432421069.jpg",
            }}
            className="h-20 w-20"
          />
        </View>
        <View>
          <Text>{heading}</Text>
          <Text>2 Days ago</Text>
        </View>
      </View>
      <View>
        <Text>{intro}</Text>
      </View>
    </TouchableOpacity>
  );
}
