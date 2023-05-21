import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ThemeContext from "../context/ThemeContext";

const BulletLayout = () => {
  const [checklist, setChecklist] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const textInputRef = useRef(null);

  const {
    theme: { colors },
  } = React.useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    addButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.background,
    },
    addButtonText: {
      color: colors.text,
      fontSize: 14,
      fontWeight: "400",
    },
    checklistContainer: {
      flexGrow: 1,
      paddingHorizontal: 10,
    },
    checklistItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 8,
      flex: 1,
    },
    checkIcon: {
      marginRight: 8,
      marginTop: 4,
    },
    uncheckedText: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.text,
      flex: 1,
      fontWeight: "400",
    },
    checkedText: {
      fontSize: 16,
      lineHeight: 24,
      textDecorationLine: "line-through",
      color: colors.text,
      opacity: 0.6,
      flex: 1,
      fontWeight: "400",
    },
  });

  const handleAddItem = () => {
    setChecklist((prevChecklist) => [
      ...prevChecklist,
      { text: "", checked: false },
    ]);
    setEditingIndex(checklist.length); // Set the editing index to the new checklist item
    textInputRef.current?.focus();
  };

  const handleToggleItem = (index) => {
    // if (editingIndex !== -1) {
    //   return; // Item is being edited, do not toggle
    // }

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

    if (index === editingIndex) {
      setEditingIndex(-1);
    } else if (index < editingIndex) {
      setEditingIndex(editingIndex - 1);
    }
  };

  const handleStartEditing = (index) => {
    setEditingIndex(index);
  };

  const handleFinishEditing = () => {
    setEditingIndex(-1);
  };

  const handleEditItem = (newText, index) => {
    setEditingIndex(index);
    setChecklist((prevChecklist) => {
      const updatedChecklist = [...prevChecklist];
      updatedChecklist[index].text = newText;
      return updatedChecklist;
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.checklistItem}>
        <Ionicons
          name={item.checked ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.checked ? colors.activeColor : colors.inActiveColor}
          style={styles.checkIcon}
          onPress={() => handleToggleItem(index)}
        />
        <TextInput
          value={item.text}
          onChangeText={(newText) => handleEditItem(newText, index)}
          autoFocus={index === editingIndex}
          onBlur={handleFinishEditing}
          style={item.checked ? styles.checkedText : styles.uncheckedText}
          multiline
        />
        <TouchableOpacity onPress={() => handleRemoveItem(index)}>
          <Ionicons name="close" size={24} color={colors.inActiveColor} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.addButtonText}>Click to insert checklist</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={checklist}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.checklistContainer}
          keyboardShouldPersistTaps="handled"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default BulletLayout;
