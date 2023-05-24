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
  isFolder: boolean;
}

const items: Item[] = [
  { id: 1, name: "Personal", isFolder: true },
  { id: 2, name: "Work", isFolder: true },
  { id: 3, name: "Joshua", isFolder: true },
  { id: 4, name: "Space", isFolder: true },
  { id: 5, name: "Quotes", isFolder: true },
  { id: 6, name: "Books", isFolder: true },
  { id: 7, name: "Gmails", isFolder: true },
  { id: 8, name: "Movies", isFolder: true },
];

export default function FoldersLayout() {
  const { colors } = useTheme();
  const column = 3; // Number of columns

  // Calculate the number of empty items needed to fill the remaining space
  const remainingSpace = (column - (items.length % column)) % column;
  const emptyItems = Array.from({ length: remainingSpace }).map((_, index) => ({
    id: -(index + 1), // Use a unique negative ID for the empty item
    name: "",
    isFolder: false,
  }));

  const adjustedItems = [...items, ...emptyItems];

  // // Find the first object with an empty name
  // if (emptyItems.length)
  //   emptyItems.find((item) => item?.name === "").name = "Add Folder";

  const renderColumn = ({ item }: { item: Item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0}
        style={[styles.column, !item.isFolder && styles.invisibleItem]}
        disabled={!item.isFolder}
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
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          {item.name.toLowerCase() == "add folder" ? (
            <SvgIcon icon="add" width={60} height={60} fill={colors.border} />
          ) : (
            <SvgIcon icon="folder" width={60} height={60} fill="#FFC04D" />
          )}
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.text,
              marginTop: 5,
            }}
          >
            {item.isFolder ? item.name : null}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
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
    marginHorizontal: 5,
    marginBottom: 10,
  },
  columnContainer: {
    flex: 1,
    marginBottom: 20,
  },
  invisibleItem: {
    opacity: 0,
  },
});
