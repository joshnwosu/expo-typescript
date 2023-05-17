import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";
import React from "react";
// import BulletLayout from "../components/layouts/BulletLayout";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

interface Props {
  key: number;
  image: string;
  location: string;
  numberOfDays: number;
}

const data: Props[] = [
  {
    key: 1,
    image:
      "https://images.unsplash.com/photo-1683965895714-6365f5898de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    location: "Lagos, Nigeria",
    numberOfDays: 25,
  },
  {
    key: 2,
    image:
      "https://images.unsplash.com/photo-1684178315101-454993c20fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    location: "California, United State",
    numberOfDays: 25,
  },
  {
    key: 3,
    image:
      "https://images.unsplash.com/photo-1684123079602-5ca2d8572cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    location: "Mumbai, India",
    numberOfDays: 25,
  },
  {
    key: 4,
    image:
      "https://images.unsplash.com/photo-1684318552608-3d808b715fac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    location: "Hong Kong, China",
    numberOfDays: 25,
  },
  {
    key: 5,
    image:
      "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80",
    location: "Moscow, Russia",
    numberOfDays: 25,
  },
];

const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 400;
const SPACING = 15;
const RADIUS = 10;

const FULL_WIDTH = ITEM_WIDTH + SPACING;

export default function SharedElementLayout() {
  const navigation = useNavigation<NavigationProp<any>>();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, paddingVertical: 30 }}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_WIDTH}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * FULL_WIDTH,
            index * FULL_WIDTH,
            (index + 1) * FULL_WIDTH,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
          });
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.itemContainer}
              onPress={() => {
                navigation.navigate("Details", {
                  item,
                });
              }}
            >
              <SharedElement
                id={`item.${item.key}.photo`}
                style={[StyleSheet.absoluteFillObject]}
              >
                <View
                  style={[
                    StyleSheet.absoluteFillObject,
                    { overflow: "hidden", borderRadius: RADIUS },
                  ]}
                >
                  <Animated.Image
                    source={{ uri: item.image }}
                    style={[
                      StyleSheet.absoluteFillObject,
                      { transform: [{ scale }] },
                      { resizeMode: "cover" },
                    ]}
                  />
                </View>
              </SharedElement>
              <SharedElement id={`item.${item.key}.location`}>
                <Animated.Text
                  style={[
                    styles.location,
                    {
                      transform: [{ translateX }],
                    },
                  ]}
                >
                  {item.location}
                </Animated.Text>
              </SharedElement>
              <View style={styles.days}>
                <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                <Text style={styles.daysLabel}>Days</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,
  },
  location: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "800",
    width: ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: SPACING,
    left: SPACING,
  },
  days: {
    position: "absolute",
    bottom: SPACING,
    left: SPACING,
    width: 52,
    height: 52,
    borderRadius: 52,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  daysValue: {
    fontWeight: "800",
    color: "#FFFFFF",
    fontSize: 18,
  },
  daysLabel: {
    color: "#FFFFFF",
    fontSize: 10,
  },
});
