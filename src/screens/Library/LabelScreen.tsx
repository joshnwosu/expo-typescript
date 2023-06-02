import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SharedElementLayout from "../../components/layouts/SharedElementLayout";

export default function LabelScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <SharedElementLayout />
    </View>
  );
}
