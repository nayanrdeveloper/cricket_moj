import { View, Text, ScrollView } from "react-native";
import React from "react";
import NewsStoryCard from "../components/NewsStoryCard";
import { useGetAllNewsQuery } from "../features/newsApi";

export default function AllNews() {
  const { data, error, isLoading } = useGetAllNewsQuery();
  const newsList = [
    {
      id: 122034,
      image: "https://wallpaperset.com/w/full/4/5/7/482096.jpg",
      pubTime: 354567547,
      hline: "Abu Jayed expresses disappointment after Test exclusion",
      intro:
        "The seamer has been dropped since the BCB selectors opted to pick fast bowlers with more pace on offer ",
    },
    {
      id: 122033,
      hline: "Gutsy Rayudu proves his worth",
      pubTime: 354567547,
      image: "https://wallpaperset.com/w/full/4/5/7/482096.jpg",
      intro:
        "The 36-year-old stood tall with an outstanding knock but couldn't prevent Chennai Super Kings from falling short",
    },
    {
      id: 122032,
      hline: "PBKS hold nerve to fend off CSK to revive campaign",
      pubTime: 354567547,
      image: "https://wallpaperset.com/w/full/4/5/7/482096.jpg",
      intro:
        "CSK fell short by 11 runs despite a superb 39-ball 78 from Ambati Rayudu",
    },
    {
      id: 122031,
      hline: "CSA the losers in the Smith battle",
      pubTime: 354567547,
      image: "https://wallpaperset.com/w/full/4/5/7/482096.jpg",
      intro:
        "USD127,000 - that's how much, it is estimated, CSA could be ordered to pay in legal fees for Smith's arbitration",
    },
  ];
  return (
    <ScrollView className="mt-2 mx-2">
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
