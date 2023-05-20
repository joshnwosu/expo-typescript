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
import { useTheme } from "@react-navigation/native";

const BulletLayout = () => {
  const { colors } = useTheme();
  const [note, setNote] = useState("");
  const [checklist, setChecklist] = useState([]);

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
      // lineHeight: 24,
      color: colors.text,
      backgroundColor: colors.card,
    },
    addButton: {
      backgroundColor: colors.primary,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: colors.border,
    },
    addButtonText: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "bold",
    },
    checklistContainer: {
      flexGrow: 1,
      paddingHorizontal: 10,
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
      color: colors.text,
    },
    checkedText: {
      fontSize: 16,
      lineHeight: 24,
      textDecorationLine: "line-through",
      color: colors.text,
      opacity: 0.6,
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

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.checklistItem}
      onPress={() => handleToggleItem(index)}
      onLongPress={() => handleRemoveItem(index)}
    >
      <Ionicons
        name={item.checked ? "checkmark-circle-outline" : "ellipse-outline"}
        size={24}
        color={item.checked ? colors.primary : colors.text}
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
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

export default BulletLayout;
