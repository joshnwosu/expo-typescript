import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NoteApp = () => {
  const [note, setNote] = useState("");
  const [checklist, setChecklist] = useState([]);

  const handleAddItem = () => {
    if (note.trim() !== "") {
      setChecklist((prevChecklist) => [
        ...prevChecklist,
        { text: note, checked: false },
      ]);
      setNote("");
    }
  };

  const handleToggleItem = (index) => {
    setChecklist((prevChecklist) => {
      const updatedChecklist = [...prevChecklist];
      updatedChecklist[index].checked = !updatedChecklist[index].checked;
      return updatedChecklist;
    });
  };

  const handleRemoveItem = (index) => {
    setChecklist((prevChecklist) => {
      const updatedChecklist = [...prevChecklist];
      updatedChecklist.splice(index, 1);
      return updatedChecklist;
    });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.checklistItem}
      onPress={() => handleToggleItem(index)}
      onLongPress={() => handleRemoveItem(index)}
    >
      <Ionicons
        name={item.checked ? "checkmark-circle-outline" : "ellipse-outline"}
        size={24}
        color={item.checked ? "#3CB371" : "#888888"}
        style={styles.checkIcon}
      />
      <Text style={item.checked ? styles.checkedText : styles.uncheckedText}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Enter a note..."
          style={styles.textInput}
          onSubmitEditing={handleAddItem}
          blurOnSubmit={false}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={checklist}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.checklistContainer}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 8,
    padding: 8,
    fontSize: 16,
    // lineHeight: 24,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  checklistContainer: {
    flexGrow: 1,
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkIcon: {
    marginRight: 8,
  },

  uncheckedText: {
    fontSize: 16,
    lineHeight: 24,
  },
  checkedText: {
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "line-through",
    color: "#888888",
  },
});

export default NoteApp;
