import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import MasonryLayout from "../../components/layouts/MasonryLayout";
import { useNavigation } from "@react-navigation/native";

const NotesScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MasonryLayout />
    </View>
  );
};

export default NotesScreen;
