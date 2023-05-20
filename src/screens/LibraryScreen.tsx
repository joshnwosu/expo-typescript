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
  navigation?: any;
}

const NOTES: Props[] = [
  {
    name: "Notes",
    count: 14,
    icon: "notes",
    color: "#3F7DE8",
  },
  {
    name: "Starred",
    count: 5,
    icon: "star",
    color: "#F0C422",
  },
  {
    name: "Archive",
    count: 7,
    icon: "archive",
    color: "#67BE67",
  },
  {
    name: "Recently Deleted",
    count: 2,
    icon: "trash",
    color: "#DE6058",
  },
];

const FOLDERS: Props[] = [
  { name: "Personal", count: 14, icon: "folder" },
  { name: "Work", count: 5, icon: "folder" },
];

const LABELS: Props[] = [{ name: "Inspiration", count: 8, icon: "tag" }];

const Card = ({ title, data, color, onPress, navigation }: CardProps) => {
  // const { colors } = useTheme();
  const { colors } = useContext(ThemeContext);

  return (
    <View>
      {title && (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 10,
          }}
          onPress={() => {
            navigation.navigate(title);
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

          <View
            style={{
              opacity: 0.4,
            }}
          >
            <Ionicons name="chevron-forward" size={16} color={colors.text} />
          </View>
        </TouchableOpacity>
      )}

      <View
        style={{
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
              onPress={() => {
                navigation.navigate("Note Detail", {
                  screen: item.name,
                });
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
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
                      paddingVertical: 2,
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
                {/* <View
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
                </View> */}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default function LibraryScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 20 }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <Card
            // title={"Notes"}
            data={NOTES}
            navigation={navigation}
          />
          <Card
            title={"Folders"}
            data={FOLDERS}
            color="#FFC04D"
            navigation={navigation}
          />
          <Card
            title={"Labels"}
            data={LABELS}
            color="#6d6f7a"
            onPress={() => dispatch(incrementByAmount(5))}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
