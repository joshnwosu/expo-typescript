import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";

const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 400;
const SPACING = 15;
const RADIUS = 10;

const FULL_WIDTH = ITEM_WIDTH + SPACING;

export default function DetailScreen({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
      <AntDesign
        name="arrowleft"
        size={24}
        color={"#333"}
        style={{
          paddingHorizontal: 15,
          position: "absolute",
          top: 50,
          left: 10,
          zIndex: 2,
        }}
        onPress={navigation.goBack}
      />
      <SharedElement
        id={`item.${item.key}.photo`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <View style={[StyleSheet.absoluteFillObject, { borderRadius: 15 }]}>
          <Image
            source={{ uri: item.image }}
            style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
          />
        </View>
      </SharedElement>
      <SharedElement id={`item.${item.key}.location`}>
        <Text style={[styles.location]}>{item.location}</Text>
      </SharedElement>
    </View>
  );
}

DetailScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.key}.photo`,
    },
    {
      id: `item.${item.key}.location`,
    },
  ];
};

const styles = StyleSheet.create({
  location: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: 120,
    left: SPACING * 2,
  },
});
