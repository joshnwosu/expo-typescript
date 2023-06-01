import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useContext } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import SvgIcon from "../components/common/icons";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment, incrementByAmount } from "../features/counter/counterSlice";
import ThemeContext from "../components/context/ThemeContext";
import { IconName } from "../types/icon";
import GroupCardList from "../components/layouts/group-card/GroupCardList";
import { GroupCardItemProps } from "../types";

const NOTES = [
  {
    name: "Notes",
    count: 14,
    icon: "notes",
    icon_color: "#3F7DE8",
  },
  {
    name: "Starred",
    count: 5,
    icon: "star",
    icon_color: "#F0C422",
  },
  {
    name: "Archive",
    count: 7,
    icon: "archive",
    icon_color: "#67BE67",
  },
  {
    name: "Recently Deleted",
    count: 2,
    icon: "trash",
    icon_color: "#DE6058",
  },
];

const FOLDERS = [
  { name: "Personal", count: 14, icon: "folder" },
  { name: "Work", count: 5, icon: "folder" },
];

const LABELS = [{ name: "Inspiration", count: 8, icon: "tag" }];

export default function LibraryScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

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
      <GroupCardList title="Folders" data={FOLDERS} primary_color="#FFC04D" />
      <GroupCardList title="Labels" data={LABELS} primary_color="#6d6f7a" />
    </ScrollView>
  );
}
