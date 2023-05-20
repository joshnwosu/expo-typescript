import React, { useState, useRef, useEffect } from "react";
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
  const [note, setNote] = useState("");
  const [checklist, setChecklist] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const textInputsRefs = useRef([]);
  const [keyPressEvent, setKeyPressEvent] = useState("");

  const {
    theme: { colors },
  } = React.useContext(ThemeContext);

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
      borderColor: colors.border,
      borderRadius: 4,
      marginRight: 8,
      padding: 8,
      fontSize: 16,
      color: colors.text,
      backgroundColor: colors.background,
    },
    addButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    addButtonText: {
      color: colors.text,
      fontSize: 14,
      fontWeight: "400",
    },
    checklistContainer: {
      flexGrow: 1,
      //   paddingHorizontal: 10,
    },
    checklistItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 4,
      flex: 1,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 8,
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
    editTextInput: {
      flex: 1,
      //   borderRadius: 4,
      fontSize: 20,
      fontWeight: "400",
      color: colors.text,
      margin: 0,
      padding: 8,
      lineHeight: 24,
      //   borderWidth: 1,
      //   borderColor: colors.border,
      //   backgroundColor: colors.background,
    },
  });

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
    if (editingIndex !== -1) {
      return; // Item is being edited, do not toggle
    }

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

    if (index < textInputsRefs.current.length) {
      textInputsRefs.current[index].focus();
    } else if (index > 0 && index === textInputsRefs.current.length) {
      textInputsRefs.current[index - 1].focus();
    }
  };

  const handleRemoveEditingItem = () => {
    if (editingIndex !== -1) {
      handleRemoveItem(editingIndex);
      setEditingIndex(-1);
    }
  };

  const handleStartEditing = (index) => {
    setEditingIndex(index);
  };

  const handleFinishEditing = () => {
    setEditingIndex(-1);
  };

  const handleEditItem = (newText, index) => {
    if (newText.trim() === "" && keyPressEvent === "Backspace") {
      handleRemoveEditingItem();
    }

    if (newText.endsWith("\n")) {
      newText = newText.slice(0, -1); // Remove the trailing newline character
      if (newText.trim() !== "") {
        setChecklist((prevChecklist) => [
          ...prevChecklist,
          { text: "", checked: false },
        ]);
        setTimeout(() => {
          setEditingIndex(index + 1);
        }, 0);
      }
    }

    setChecklist((prevChecklist) => {
      const updatedChecklist = [...prevChecklist];
      updatedChecklist[index].text = newText;
      return updatedChecklist;
    });
  };

  const handleKeyPress = (event) => {
    setKeyPressEvent(event.nativeEvent.key);
    if (event.nativeEvent.key === "Enter") {
      event.preventDefault();
      handleAddItem();
    } else if (event.nativeEvent.key === "Backspace") {
      event.preventDefault();
      //   handleRemoveEditingItem();
      //   console.log("Yo");

      //   console.log(checklist);
      //   console.log(editingIndex);
    }
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
          ref={(ref) => (textInputsRefs.current[index] = ref)}
          value={item.text}
          onChangeText={(newText) => handleEditItem(newText, index)}
          autoFocus
          onBlur={handleFinishEditing}
          style={styles.editTextInput}
          multiline
          onKeyPress={handleKeyPress}
        />
      </View>
    );
  };

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
          <Ionicons name={"add"} size={24} color={colors.activeColor} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={{ flex: 1 }}>
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
