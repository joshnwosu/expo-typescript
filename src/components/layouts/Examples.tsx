import { View, TextInput, Text, Button, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ThemeContext from "../context/ThemeContext";

interface Note {
  title: string;
  content: string;
}

const note: Note = {
  title: "How to be a better software engineer",
  content: `If you want to automatically add to your Apple Account balance, set up auto reload.\nYou can top up your balance weekly, biweekly, or monthly.\nOr you can automatically top up your balance when it's low.`,
};

const Examples: React.FC = () => {
  const [showCheckboxes, setShowCheckboxes] = React.useState(false);
  let list = note.content.split("\n").map((element) => element.trim());
  const {
    theme: { colors },
  } = React.useContext(ThemeContext);

  const renderCheckboxes = () => {
    return (
      <View>
        {list.map((item, index) => (
          <View
            key={index.toString()}
            style={{
              marginBottom: 5,
              flexDirection: "row",
              alignItems: "flex-start",
              backgroundColor: colors.card,
              padding: 10,
              borderRadius: 7,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="ellipse-outline" size={20} color={colors.text} />
            </View>
            <TextInput
              value={item}
              multiline
              style={{
                flex: 1,
                color: colors.text,
                lineHeight: 20,
                paddingTop: 0,
              }}
              placeholderTextColor={colors.text}
              autoFocus
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      automaticallyAdjustKeyboardInsets
    >
      <Button
        title="Checkboxes"
        onPress={() => setShowCheckboxes(!showCheckboxes)}
      />
      <View style={{ marginTop: 30, padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "600",
            marginBottom: 10,
            color: colors.text,
          }}
        >
          {note.title}
        </Text>
        <View>
          {showCheckboxes ? (
            <>{renderCheckboxes()}</>
          ) : (
            <View>
              <TextInput
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  color: colors.text,
                  lineHeight: 24,
                  opacity: 0.7,
                }}
                multiline
                value={note.content.trim()}
                autoFocus
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Examples;
