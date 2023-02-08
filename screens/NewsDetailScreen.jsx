import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useGetNewsDetailsQuery } from "../features/newsApi";

export default function NewsDetailScreen() {
    const {
      params: { id },
    } = useRoute();
  const { data } = useGetNewsDetailsQuery(id);
  const newsData = {
    id: 122025,
    headline:
      "Abdur Razzak to serve short coaching stint at High Performance Unit",
    content: [{}],
  };
  return (
    <View className="mt-10">
      {/* <Image source={{ uri: "" }} className="w-full h-32" /> */}
      <View>
        <Text>{data?.headline}</Text>
      </View>
      <View>
        <Text>{data?.authors[0].name}</Text>
        <Text>2 hrs Ago</Text>
      </View>
      <ScrollView>
        {data &&
          data.content &&
          data.content.map((contentItem, index) => {
            return (
              contentItem &&
              contentItem.content &&
              contentItem.content.contentType === "text" && (
                <View key={index} className="mt-4">
                  <Text>{contentItem.content.contentValue}</Text>
                </View>
              )
            );
          })}
      </ScrollView>
    </View>
  );
}
