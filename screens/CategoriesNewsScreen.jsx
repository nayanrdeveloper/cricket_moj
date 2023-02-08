import { View, Text, ScrollView } from "react-native";
import React from "react";
import NewsCategoryCard from "../components/NewsCategoryCard";
import { useGetNewsCategoriesQuery } from "../features/newsApi";

export default function CategoriesNewsScreen() {
  const { data, error, isLoading } = useGetNewsCategoriesQuery();
  return (
    <ScrollView>
      <View className="mx-2 mt-2">
        {data?.storyType?.map((categoryCardItem) => {
          return (
            <NewsCategoryCard
              key={categoryCardItem.id}
              name={categoryCardItem.name}
              id={categoryCardItem.id}
              description={categoryCardItem.description}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
