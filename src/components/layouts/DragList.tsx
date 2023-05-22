import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { MaterialIcons } from "@expo/vector-icons";

const DragList = () => {
  const [data, setData] = useState([
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    // ...other objects in the array
  ]);

  const renderItem = ({ item, index, drag }: any) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          marginBottom: 5,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onLongPress={drag}
          style={{
            // borderWidth: 1,
            padding: 20,
          }}
        >
          <MaterialIcons
            name="drag-indicator"
            size={20}
            style={{ opacity: 0.5 }}
          />
        </TouchableOpacity>

        <View>
          <Text style={{ marginLeft: 10 }}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <DraggableFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onDragEnd={({ data }) => setData(data)}
    />
  );
};

export default DragList;
