import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import { useTheme } from "@react-navigation/native";

interface Item {
  id: number;
  name: string;
  height: number;
}

interface Colors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

const CardItem = ({ item, colors }: { item: any; colors: Colors }) => {
  return (
    <TouchableOpacity
      style={{
        // width: "100%",
        backgroundColor: colors.card,
        height: item.height,
        margin: 5,
        borderRadius: 10,
        padding: 10,
      }}
    >
      {/* <Text style={{ color: colors.text }}>{item.name}</Text> */}
    </TouchableOpacity>
  );
};

const MasonryLayout = () => {
  const { colors } = useTheme();
  const data: Item[] = [
    { id: 1, name: "Item 1", height: 200 },
    { id: 2, name: "Item 2", height: 150 },
    { id: 3, name: "Item 3", height: 150 },
    { id: 4, name: "Item 4", height: 200 },
    // Add more items here as needed
  ];

  return (
    <View style={styles.container}>
      <MasonryList
        data={data}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        renderItem={({ item }) => <CardItem item={item} colors={colors} />}
        onEndReachedThreshold={0.1}
        containerStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default MasonryLayout;
