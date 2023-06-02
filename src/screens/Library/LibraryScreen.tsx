import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../app/hooks";
import GroupCardList from "../../components/layouts/group-card/GroupCardList";
import { GroupCardListProps } from "../../types";
import { Ionicons } from "@expo/vector-icons";
import ThemeContext from "../../components/context/ThemeContext";
import HapticTouch from "../../components/common/HapticTouch";

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
    name: "Labels",
    message: 1,
    icon: "tag",
    icon_color: "#8C8C8C",
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
    // description:
    //   "Items in here are permanently deleted after 30 days. Change In settings",
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
  const navigation = useNavigation<any>();
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
      <GroupCardList
        data={NOTES}
        onPress={(screen: string) =>
          navigation.navigate("Screen Detail", { screen })
        }
      />
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
            <HapticTouch onPress={() => console.log("Add Folder")}>
              <Ionicons name="add-outline" color={colors.text} size={24} />
            </HapticTouch>
            <HapticTouch onPress={() => console.log("Collapse Folders")}>
              <Ionicons
                name="chevron-down-outline"
                color={colors.text}
                size={20}
                style={{ marginLeft: 20 }}
              />
            </HapticTouch>
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
            <HapticTouch onPress={() => navigation.navigate("Labels")}>
              <Ionicons name="add-outline" color={colors.text} size={24} />
            </HapticTouch>
            <HapticTouch onPress={() => navigation.navigate("Collapse Labels")}>
              <Ionicons
                name="chevron-down-outline"
                color={colors.text}
                size={20}
                style={{ marginLeft: 20 }}
              />
            </HapticTouch>
          </View>
        }
        data={LABELS}
        list_color="#6d6f7a"
        list_clickable
      />
    </ScrollView>
  );
}
