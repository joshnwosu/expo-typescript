import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert,
  Button,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";

const windowDimensions = Dimensions.get("window");
const BUTTON_WIDTH = 80;
const MAX_TRANSLATE = -BUTTON_WIDTH * 2;

type Data = {
  id: string;
  title: string;
};
const data: Data[] = [
  {
    id: "1",
    title: "Kate Bell",
  },
  {
    id: "2",
    title: "John Appleseed",
  },
  {
    id: "3",
    title: "Steve Jobs",
  },
  {
    id: "4",
    title: "Iron Man",
  },
  {
    id: "5",
    title: "Captain America",
  },
  {
    id: "6",
    title: "Batman",
  },
  {
    id: "7",
    title: "Matt Smith",
  },
];

function SwipableList(): React.ReactElement {
  function onRemove() {
    Alert.alert("Removed");
  }

  return (
    <View style={s.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} onRemove={onRemove} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const springConfig = (velocity: number) => {
  "worklet";

  return {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    velocity,
  };
};

const timingConfig = {
  duration: 400,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
};

type ListItemProps = {
  item: Data;
  onRemove: () => void;
};
function ListItem({ item, onRemove }: ListItemProps) {
  const isRemoving = useSharedValue(false);
  const translateX = useSharedValue(0);

  type AnimatedGHContext = {
    startX: number;
  };

  const handler = useAnimatedGestureHandler<any>({
    onStart: (_evt, ctx: any) => {
      ctx.startX = translateX.value;
    },

    onActive: (evt, ctx: any) => {
      const nextTranslate = evt.translationX + ctx.startX;
      translateX.value = Math.min(0, Math.max(nextTranslate, MAX_TRANSLATE));
      console.log(translateX.value);
    },

    onEnd: (evt) => {
      if (evt.velocityX < -20) {
        translateX.value = withSpring(
          MAX_TRANSLATE,
          springConfig(evt.velocityX)
        );
      } else {
        translateX.value = withSpring(0, springConfig(evt.velocityX));
      }
    },
  });

  const styles = useAnimatedStyle(() => {
    if (isRemoving.value) {
      return {
        height: withTiming(0, timingConfig, () => {
          runOnJS(onRemove)();
        }),
        transform: [
          {
            translateX: withTiming(-windowDimensions.width, timingConfig),
          },
        ],
      };
    }
    return {
      height: 78,
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  function handleRemove() {
    isRemoving.value = true;
  }
  return (
    <View style={s.item}>
      <PanGestureHandler activeOffsetX={[-10, 10]} onGestureEvent={handler}>
        <Animated.View style={styles}>
          <ListItemContent item={item} />
          <View style={s.buttonsContainer}>
            <View
              style={{
                backgroundColor: "red",
                width: BUTTON_WIDTH,
                justifyContent: "center",
              }}
            >
              <Button onPress={handleRemove} title="Delete" color="white" />
            </View>
            <View
              style={{
                backgroundColor: "blue",
                width: BUTTON_WIDTH,
                justifyContent: "center",
              }}
            >
              <Button onPress={handleRemove} title="Edit" color="white" />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

function ListItemContent({ item }: { item: Data }) {
  return (
    <View style={s.itemContainer}>
      <View style={s.avatarContainer}>
        <Text style={s.avatarText}>{item.title[0]}</Text>
      </View>
      <Text style={s.title}>{item.title}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    justifyContent: "center",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 18,
    color: "white",
  },
  title: {
    fontSize: 18,
    marginLeft: 16,
  },

  buttonsContainer: {
    position: "absolute",
    top: 0,
    backgroundColor: "pink",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    left: windowDimensions.width,
    width: windowDimensions.width,
  },
});

export default SwipableList;
