import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import SvgIcon from "../components/common/icons";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: string;
  count?: number;
  icon: string;
  color?: string;
}

interface CardProps {
  title: string;
  data: Props[];
  color?: string | undefined;
}

const NOTES: Props[] = [
  { name: "All Documents", count: 14, icon: "notes", color: "#3F7DE8" },
  { name: "Started", count: 5, icon: "star", color: "#F0C422" },
  { name: "Archive", count: 7, icon: "archive", color: "#67BE67" },
  { name: "Trash", count: 2, icon: "trash", color: "#DE6058" },
];

const FOLDERS: Props[] = [
  { name: "Personal", count: 14, icon: "folder" },
  { name: "Work", count: 5, icon: "folder" },
  { name: "Quotes", count: 2, icon: "folder" },
];

const LABELS: Props[] = [
  { name: "Inspiration", icon: "tag" },
  { name: "Design", icon: "tag" },
];

const Card = ({ title, data, color }: CardProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          color: colors.text,
          fontSize: 20,
          fontWeight: "600",
          marginHorizontal: 10,
          marginBottom: 10,
        }}
      >
        {title}
      </Text>

      <View
        style={{
          minHeight: 100,
          borderRadius: 10,
          backgroundColor: colors.card,
        }}
      >
        {data.map((item, index, arr) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 40,
                  marginHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgIcon
                  icon={item.icon}
                  width={24}
                  height={24}
                  fill={item.color ?? color}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "space-between",
                  position: "relative",
                  paddingVertical: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.border,
                    height: index == arr.length - 1 ? 0 : 1,
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    opacity: 0.4,
                  }}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      opacity: 0.5,
                      marginLeft: 10,
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    {item.count}
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 10,
                  }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={colors.text}
                    style={{
                      opacity: 0.4,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default function LibraryScreen() {
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
      <Card title={"Notes"} data={NOTES} />
      <Card title={"Folders"} data={FOLDERS} color="#FFC14B" />
      <Card title={"Labels"} data={LABELS} color="#706FC8" />
    </ScrollView>
  );
}
