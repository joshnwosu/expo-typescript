import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export default function LibraryScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View>
        <Text
          style={{
            color: "blue",
          }}
        >
          Notes
        </Text>

        <View
          style={{
            height: 200,
            borderRadius: 10,
            backgroundColor: colors.card,
            padding: 20,
          }}
        >
          <Text>Note Items</Text>
        </View>
      </View>
    </View>
  );
}
