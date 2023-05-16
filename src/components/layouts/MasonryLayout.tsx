import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";

interface Item {
  id: number;
  name: string;
  height: number;
}

const CardItem = () => {
  return (
    <View>
      <Text style={{ color: "red" }}>Hello world</Text>
    </View>
  );
};

const MasonryLayout = () => {
  const data: Item[] = [
    { id: 1, name: "Item 1", height: 200 },
    { id: 2, name: "Item 2", height: 150 },
    { id: 3, name: "Item 3", height: 250 },
    { id: 4, name: "Item 4", height: 180 },
    // Add more items here as needed
  ];

  return (
    <View style={styles.container}>
      <MasonryList
        data={data}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        // showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardItem />}
        // refreshing={isLoadingNext}
        // onRefresh={() => refetch({first: ITEM_CNT})}
        onEndReachedThreshold={0.1}
        // onEndReached={() => loadNext(ITEM_CNT)}
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
  item: {
    position: "absolute",
    backgroundColor: "gray",
    borderWidth: 1,
  },
});

export default MasonryLayout;
