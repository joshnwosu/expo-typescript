import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import SvgIcon from "../common/icons";

interface Item {
  id: number;
  name: string;
  isVisible?: boolean;
}

const items: Item[] = [
  { id: 1, name: "Personal" },
  { id: 2, name: "Work" },
  { id: 3, name: "Joshua" },
  { id: 4, name: "Space" },
  { id: 5, name: "Quotes" },
  // { name: "Books" },
];

export default function FoldersLayout() {
  const { colors } = useTheme();
  const column = 3; // Number of columns

  // Calculate the number of empty items needed to fill the remaining space
  const remainingSpace = (column - (items.length % column)) % column;
  const emptyItems = Array.from({ length: remainingSpace }).map((_, index) => ({
    id: -(index + 1), // Use a unique negative ID for the empty item
    name: "",
    isVisible: false,
  }));

  const adjustedItems = [...items, ...emptyItems];

  const renderColumn = ({ item }: { item: Item }) => {
    return (
      <TouchableOpacity
        style={[styles.column, item.isVisible == false && styles.invisibleItem]}
      >
        <View
          style={{
            backgroundColor: colors.card,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
            paddingBottom: 10,
            borderRadius: 10,
          }}
        >
          <SvgIcon icon="folder" width={50} height={50} fill="#FFC04D" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.text,
              marginTop: 5,
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <View
        style={[
          styles.container,
          {
            paddingHorizontal: 10,
          },
        ]}
      >
        <FlatList
          data={adjustedItems}
          renderItem={renderColumn}
          keyExtractor={(item) => item.name.toString()}
          numColumns={column}
          contentContainerStyle={styles.columnContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  columnContainer: {
    flex: 1,
    marginBottom: 20,
  },
  invisibleItem: {
    opacity: 0,
  },
});
