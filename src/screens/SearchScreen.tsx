import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";
import SvgIcon from "../components/common/icons";
import ThemeContext from "../components/context/ThemeContext";

interface Props {
  name: string;
  icon: string;
  onClick?: (c: any) => void;
}

const DATA: Props[] = [
  {
    name: "Starred notes",
    icon: "star",
  },
  {
    name: "History",
    icon: "history",
  },
  {
    name: "Toggle theme",
    icon: "home",
  },
];

export default function SearchScreen({ navigation }: any) {
  const {
    theme: { colors },
    toggleTheme,
  } = React.useContext(ThemeContext);

  const tags = [
    { name: "All" },
    { name: "Books" },
    { name: "Inspiration" },
    { name: "Art" },
    { name: "Web design" },
    { name: "Coding" },
    { name: "Work" },
  ];
  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <View
        style={{
          borderRadius: 20,
          height: 40,
          overflow: "hidden",
          marginBottom: 10,
          opacity: 0.6,
        }}
      >
        <TextInput
          style={{
            backgroundColor: colors.border,
            width: "100%",
            height: "100%",
            borderRadius: 10,
            paddingLeft: 40,
            paddingRight: 20,
            color: colors.text,
          }}
          placeholder="Notes, Folders, & Labels"
          placeholderTextColor={colors.inActiveColor}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgIcon
            icon="search"
            fill={colors.inActiveColor}
            width={20}
            height={20}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ marginBottom: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {tags.map((item, index, arr) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginRight: arr.length - 1 == index ? 0 : 10,
              }}
              onPress={() => Alert.alert(item.name)}
            >
              <Text style={{ color: colors.text }}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ paddingHorizontal: 10 }}>
        {DATA.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
              onPress={toggleTheme}
            >
              <View style={{ marginRight: 20 }}>
                <SvgIcon
                  icon={item.icon}
                  fill={colors.activeColor}
                  width={30}
                  height={30}
                />
              </View>

              <Text
                style={{
                  color: colors.text,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
