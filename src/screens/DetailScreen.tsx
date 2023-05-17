import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";

const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 400;
const SPACING = 15;
const RADIUS = 10;

const FULL_WIDTH = ITEM_WIDTH + SPACING;

const zoomIn = {
  0: {
    opacity: 0,
    scale: 0,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

export default function DetailScreen({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
      <AntDesign
        name="arrowleft"
        size={24}
        color={"#FFFFFF"}
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
        <View
          style={[StyleSheet.absoluteFillObject, { backgroundColor: "#222" }]}
        >
          <Image
            source={{ uri: item.image }}
            style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}
          />
        </View>
      </SharedElement>
      <SharedElement id={`item.${item.key}.location`}>
        <Text style={[styles.location]}>{item.location}</Text>
      </SharedElement>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          paddingBottom: 100,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontWeight: "800",
            marginLeft: SPACING,
          }}
        >
          Pick colors
        </Text>
        <FlatList
          data={[...Array(8).keys()]}
          keyExtractor={(item) => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: SPACING }}
          renderItem={({ item, index }) => {
            return (
              <Animatable.View
                animation={"zoomIn"}
                duration={700}
                delay={400 + index * 100}
                // easing={"ease-in-out-cubic"}
                style={{
                  backgroundColor: "#FFFFFF",
                  // padding: SPACING,
                  width: 50,
                  height: 50,
                  marginRight: SPACING,
                  borderRadius: SPACING,
                  overflow: "hidden",
                  padding: 2,
                }}
              >
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: SPACING,
                  }}
                />
              </Animatable.View>
            );
          }}
        />
      </View>
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
