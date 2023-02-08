import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  useGetNewsStoryCategoriesQuery,
  useGetNewsStoryTopicsQuery,
} from "../features/newsApi";
import NewsStoryCard from "../components/NewsStoryCard";

export default function CategoryTopicNewsStory() {
  const {
    params: { newsType, id },
  } = useRoute();
  const { data, error, isLoading } =
    newsType === "category"
      ? useGetNewsStoryCategoriesQuery(id)
      : useGetNewsStoryTopicsQuery(id);
  return (
    <ScrollView className="mt-10 mx-2">
      {data?.storyList?.map((newsItem) => {
        return newsItem.story ? (
          <NewsStoryCard
            key={newsItem.id}
            id={newsItem.story.id}
            intro={newsItem.story.intro}
            heading={newsItem.story.hline}
            image={newsItem.story.imageId}
          />
        ) : (
          <Text>This is a Ad</Text>
        );
      })}
    </ScrollView>
  );
}
