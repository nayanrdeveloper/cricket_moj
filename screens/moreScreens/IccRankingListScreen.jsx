import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  useGetIccRankingPlayersQuery,
  usePrefetch,
} from "../../features/iccRankingApi";
import { DataTable } from "react-native-paper";
import PlayerRankingCard from "../../components/PlayerRankingCard";

export default function IccRankingListScreen() {
  const [playerList, setPlayerList] = useState();

  const matchTypeList = [
    {
      id: 1,
      apiText: "test",
      userText: "Test",
    },
    {
      id: 2,
      apiText: "odi",
      userText: "ODI",
    },
    {
      id: 3,
      apiText: "t20",
      userText: "T20",
    },
  ];
  const {
    params: { playerType, gender },
  } = useRoute();

  const [matchType, setMatchType] = useState(matchTypeList[1]);
  const { data, error, isLoading } = useGetIccRankingPlayersQuery(
    playerType,
    matchType.apiText
  );
  const prefetchPage = usePrefetch("getIccRankingPlayers");
  useEffect(() => {
    prefetchPage(playerType, matchType.apiText, { force: true });
    data && setPlayerList(data);
  }, [matchType, prefetchPage, playerType, data]);
  return (
    <View className="mt-10">
      <View className="flex-row justify-center rounded-md shadow">
        {matchTypeList.map((matchTypeItem) => {
          return (
            <TouchableOpacity
              key={matchTypeItem.id}
              onPress={() => setMatchType(matchTypeItem)}
              className={`px-2 py-2 border border-gray-300 ${
                matchTypeItem.apiText == matchType.apiText ? "bg-green-300" : ""
              }`}
            >
              <Text>{matchTypeItem.userText}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView className="mt-5 px-3">
        {playerList &&
          playerList.rank &&
          playerList.rank.map((player) => {
            return (
              <PlayerRankingCard
                key={player.id}
                name={player.name}
                rank={player.rank}
                points={player.points}
                faceImageId={player.faceImageId}
                country={player.country}
                rating={player.rating}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}
