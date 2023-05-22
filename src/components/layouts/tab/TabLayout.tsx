import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation, useTheme } from "@react-navigation/native";
import FoldersLayout from "../FoldersLayout";
import MasonryLayout from "../MasonryLayout";

const FirstRoute = () => {
  return <MasonryLayout />;
};

const SecondRoute = () => {
  return <FoldersLayout />;
};

export default function TabLayout() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Notes" },
    { key: "second", title: "Folders" },
  ]);

  const handleIndexChange = (currentIndex) => setIndex(currentIndex);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabItem}
              onPress={() => setIndex(i)}
            >
              <Animated.Text style={{ opacity, color: colors.text }}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },

  item: {
    width: "100%",
    position: "absolute",
    backgroundColor: "gray",
  },
});
