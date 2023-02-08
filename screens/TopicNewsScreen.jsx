import { View, Text, ScrollView } from "react-native";
import React from "react";
import NewsTopicCard from "../components/NewsTopicCard";
import { useGetNewsTopicsQuery } from "../features/newsApi";

export default function TopicNewsScreen() {
  const { data, error, isLoading } = useGetNewsTopicsQuery();
  return (
    <ScrollView className="mt-2">
      {data &&
        data.topics &&
        data.topics.map((topicNewItem) => {
          return (
            <NewsTopicCard
              key={topicNewItem.id}
              id={topicNewItem.id}
              headline={topicNewItem.headline}
              description={topicNewItem.description}
            />
          );
        })}
    </ScrollView>
  );
}
