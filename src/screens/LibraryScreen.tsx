import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import SvgIcon from "../components/common/icons";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment, incrementByAmount } from "../features/counter/counterSlice";

interface Props {
  name: string;
  count?: number;
  icon: string;
  color?: string;
}

interface CardProps {
  title?: string;
  data: Props[];
  color?: string | undefined;
  onPress?: () => void;
}

const NOTES: Props[] = [
  { name: "All Documents", count: 14, icon: "notes", color: "#3F7DE8" },
  { name: "Starred", count: 5, icon: "star", color: "#F0C422" },
  { name: "Archive", count: 7, icon: "archive", color: "#67BE67" },
  { name: "Trash", count: 2, icon: "trash", color: "#DE6058" },
];

const FOLDERS: Props[] = [
  { name: "Personal", count: 14, icon: "folder" },
  { name: "Work", count: 5, icon: "folder" },
];

const LABELS: Props[] = [{ name: "Inspiration", count: 8, icon: "tag" }];

const Card = ({ title, data, color, onPress }: CardProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginTop: 20 }}>
      {title && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            {title}
          </Text>

          {onPress && (
            <TouchableOpacity
              style={{
                opacity: 0.4,
              }}
              onPress={onPress}
            >
              <SvgIcon icon="add" fill={colors.text} />
            </TouchableOpacity>
          )}
        </View>
      )}

      <View
        style={{
          borderRadius: 10,
          backgroundColor: colors.card,
          // borderWidth: 1,
          // borderColor: colors.border,
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
                  marginHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SvgIcon
                  icon={item.icon}
                  width={30}
                  height={30}
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
                  <View
                    style={{
                      marginLeft: 10,
                      backgroundColor: colors.background,
                      paddingVertical: 2,
                      paddingHorizontal: 5,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.text,
                        opacity: 0.5,
                        fontSize: 13,
                        fontWeight: "500",
                      }}
                    >
                      {item.count}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    opacity: 0.4,
                  }}
                >
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={colors.text}
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
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);
  const { colors } = useTheme();

  useEffect(() => {
    // console.log(value, colors.border);
  }, [value]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Card title={"Notes"} data={NOTES} />
        <Card title={"Folders"} data={FOLDERS} color="#FFC04D" />
        <Card
          title={"Labels"}
          data={LABELS}
          color="#6d6f7a"
          onPress={() => dispatch(incrementByAmount(5))}
        />
      </ScrollView>

      {/* <TouchableOpacity
        style={{
          borderRadius: 50,
          position: "absolute",
          right: 30,
          bottom: 20,
          backgroundColor: "#9E86FE",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 8,
          borderWidth: 1,
          borderColor: colors.card,
        }}
      >
        <SvgIcon icon="notes" fill={"#FFFFFF"} width={24} height={24} />
        <Text
          style={{
            color: "#FFFFFF",
            marginLeft: 10,
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          New note
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}
