import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import ThemeContext from "../../components/context/ThemeContext";

const RentifyTestScreen = ({ navigation }) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  interface Props {
    title: string;
    amount: number;
    location: string;
    date: string;
    rating: number;
    image: string;
    id: string;
  }

  const generateUniqueId = (): string => {
    // Generate a unique ID using any desired algorithm or library
    // For example, you can use the current timestamp with a random number
    const timestamp = Date.now().toString();
    const randomNumber = Math.floor(Math.random() * 10000).toString();

    return `${timestamp}-${randomNumber}`;
  };

  const data: Props[] = [
    {
      title: "Stay with Sagario - Coach",
      amount: 400000,
      location: "Lagos, Nigeria",
      date: "June 01, 2023",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      id: generateUniqueId(),
    },
    {
      title: "Stay with Valentina - Interior designer",
      amount: 189000,
      location: "Akwa Ibom, Nigeria",
      date: "June 02, 2023",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      id: generateUniqueId(),
    },
  ];

  const renderItem = ({ item, index }: { item: Props; index: number }) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RentifyTestScreen;
