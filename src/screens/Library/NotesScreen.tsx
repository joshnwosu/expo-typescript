import { View, Text } from "react-native";
import React from "react";
import SharedElementLayout from "../../components/layouts/SharedElementLayout";
import MasonryLayout from "../../components/layouts/MasonryLayout";

const NotesScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SharedElementLayout />
      {/* <MasonryLayout />; */}
    </View>
  );
};

export default NotesScreen;
