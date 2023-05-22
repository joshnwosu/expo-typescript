import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ItemRenderer = ({ item, onTextSelect }) => {
  const { title, content, type, options } = item;
  const [highlightedText, setHighlightedText] = useState([]);

  const handleTextSelect = (text) => {
    const newHighlightedText = [...highlightedText];
    const index = newHighlightedText.indexOf(text);
    if (index !== -1) {
      newHighlightedText.splice(index, 1);
    } else {
      newHighlightedText.push(text);
    }
    setHighlightedText(newHighlightedText);
    onTextSelect(newHighlightedText);
  };

  const renderText = () => {
    if (type === "text") {
      const words = content.split(" ");
      return (
        <Text>
          {words.map((word, index) => (
            <Text
              key={index}
              style={{
                color: highlightedText.includes(word) ? options.color : "black",
              }}
              onPress={() => handleTextSelect(word)}
            >
              {`${word} `}
            </Text>
          ))}
        </Text>
      );
    } else if (type === "check") {
      return <Text>{content}</Text>; // Render check content differently, if needed
    }
  };

  return (
    <View>
      <Text>{title}</Text>
      {renderText()}
    </View>
  );
};

const App = () => {
  const items = [
    {
      title: "Item 1",
      content: "This is This the content of Item 1",
      type: "text",
      options: { color: "blue" },
    },
    {
      title: "Item 2",
      content: "This is the content of Item 2",
      type: "text",
      options: { color: "red" },
    },
    {
      title: "Item 3",
      content: "This is the content of Item 3",
      type: "check",
      options: {},
    },
  ];

  const handleTextSelect = (highlightedText) => {
    // Do something with the highlighted text array
    console.log("Highlighted Text:", highlightedText);
  };

  return (
    <View>
      {items.map((item, index) => (
        <ItemRenderer key={index} item={item} onTextSelect={handleTextSelect} />
      ))}
    </View>
  );
};

export default App;
