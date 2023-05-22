import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DraggableFlatList from "react-native-draggable-flatlist";

const BulletLayout = () => {
  const [note, setNote] = useState("");
  const [checklist, setChecklist] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const textInputsRefs = useRef([]);

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
      backgroundColor: "#FFFFFF",
    },
    addButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    checklistContainer: {
      flexGrow: 1,
    },
    checklistItem: {
      flexDirection: "row",
      paddingHorizontal: 10,
    },
    checkIcon: {
      marginRight: 8,
      marginTop: 2,
    },
    editTextInput: {
      flex: 1,
      fontSize: 20,
      fontWeight: "400",
      margin: 0,
      padding: 8,
      lineHeight: 24,
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
    if (newText.trim() === "") {
      handleRemoveEditingItem();
    }

    if (checklist[index] && newText.endsWith("\n")) {
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

    if (checklist[index]) {
      setChecklist((prevChecklist) => {
        const updatedChecklist = [...prevChecklist];
        updatedChecklist[index].text = newText;
        return updatedChecklist;
      });
    }
  };

  const renderItem = ({ item, index, drag }: any) => {
    return (
      <View style={styles.checklistItem}>
        <MaterialIcons
          name="drag-indicator"
          size={24}
          color="#000000"
          style={styles.checkIcon}
          onLongPress={drag}
        />
        <Ionicons
          name={item.checked ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.checked ? "#00FF00" : "#000000"}
          style={styles.checkIcon}
          onPress={() => handleToggleItem(index)}
        />
        <TextInput
          ref={(ref) => (textInputsRefs.current[index] = ref)}
          value={item?.text}
          onChangeText={(newText) => handleEditItem(newText, index)}
          autoFocus
          onBlur={handleFinishEditing}
          style={styles.editTextInput}
          multiline
        />
        <TouchableOpacity onPress={() => handleRemoveItem(index)}>
          <Ionicons name="close" size={24} color="#000000" />
        </TouchableOpacity>
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
          <Ionicons name="add" size={24} color="#00FF00" />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <DraggableFlatList
          data={checklist}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onDragEnd={({ data }) => setChecklist(data)}
          contentContainerStyle={styles.checklistContainer}
          keyboardDismissMode="on-drag"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default BulletLayout;
