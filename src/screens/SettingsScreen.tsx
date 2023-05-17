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

interface Props {
  key: number;
  image: string;
  location: string;
  numberOfDays: number;
}

const data: Props[] = [
  {
    key: 1,
    image: "https://source.unsplash.com/random/?ocean,day",
    location: "Lagos, Nigeria",
    numberOfDays: 25,
  },
  {
    key: 2,
    image: "https://source.unsplash.com/random/?city,day",
    location: "California, United State",
    numberOfDays: 25,
  },
  {
    key: 3,
    image: "https://source.unsplash.com/random/?village,night",
    location: "Mumbai, India",
    numberOfDays: 25,
  },
  {
    key: 4,
    image: "https://source.unsplash.com/random/?people,day",
    location: "Hong Kong, China",
    numberOfDays: 25,
  },
  {
    key: 5,
    image: "https://source.unsplash.com/random/?gun",
    location: "Moscow, Russia",
    numberOfDays: 25,
  },
];

const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 400;
const SPACING = 15;
const RADIUS = 10;

const FULL_WIDTH = ITEM_WIDTH + SPACING;

export default function SettingsScreen() {
  const navigation = useNavigation<NavigationProp<any>>();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
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
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate("Details", {
                  item,
                })
              }
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
