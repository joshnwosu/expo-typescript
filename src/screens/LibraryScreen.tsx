import { ScrollView, View, Text } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../app/hooks";
import GroupCardList from "../components/layouts/group-card/GroupCardList";
import { GroupCardListProps } from "../types";
import { Ionicons } from "@expo/vector-icons";
import ThemeContext from "../components/context/ThemeContext";

const NOTES: GroupCardListProps["data"] = [
  {
    name: "Notes",
    message: 14,
    icon: "notes",
    icon_color: "#3F7DE8",
    clickable: true,
  },
  {
    name: "Folders",
    message: 2,
    icon: "folder",
    icon_color: "#A450A6",
    clickable: true,
  },
  {
    name: "Starred",
    message: 5,
    icon: "star",
    icon_color: "#F0C422",
    clickable: true,
  },
  {
    name: "Archive",
    message: 7,
    icon: "archive",
    icon_color: "#67BE67",
    clickable: true,
  },
  {
    name: "Recently Deleted",
    message: 2,
    icon: "trash",
    icon_color: "#DE6058",
    clickable: true,
  },
];

const FOLDERS: GroupCardListProps["data"] = [
  { name: "Personal", message: 14, icon: "folder" },
  { name: "Work", message: 5, icon: "folder" },
];

const LABELS: GroupCardListProps["data"] = [
  { name: "Inspiration", message: 8, icon: "tag" },
];

export default function LibraryScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 20,
        paddingBottom: 100,
        paddingHorizontal: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <GroupCardList data={NOTES} />
      <GroupCardList
        title="Folders"
        data={FOLDERS}
        list_color="#FFC04D"
        list_clickable={true}
        titleButtonPostition="left"
        titleButton={
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="add-outline" color={colors.text} size={24} />
            <Ionicons
              name="chevron-down-outline"
              color={colors.text}
              size={24}
              style={{ marginLeft: 20 }}
            />
          </View>
        }
      />
      <GroupCardList
        title="Labels"
        titleButtonPostition="right"
        titleButton={
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="add-outline" color={colors.text} size={24} />
            <Ionicons
              name="chevron-down-outline"
              color={colors.text}
              size={24}
              style={{ marginLeft: 20 }}
            />
          </View>
        }
        data={LABELS}
        list_color="#6d6f7a"
        list_clickable
      />
    </ScrollView>
  );
}
