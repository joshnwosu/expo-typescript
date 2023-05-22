import React, { useState, useRef, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ThemeContext from "../context/ThemeContext";
import DraggableFlatList from "react-native-draggable-flatlist";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const BulletLayout = () => {
  const [title, setTitle] = useState("");
  const [checklist, setChecklist] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingValue, setEditingValue] = useState("");
  const textInputsRefs = useRef([]);
  const titleRef = useRef<any>();
  const [isMultiline, setIsMultiline] = useState(false);

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleInput: {
      borderRadius: 4,
      paddingHorizontal: 20,
      fontSize: 24,
      color: colors.text,
      backgroundColor: colors.background,
      marginBottom: 10,
    },
    insertListButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },

    checklistContainer: {
      flexGrow: 1,
      padding: 10,
    },
    checklistItem: {
      flexDirection: "row",
      flex: 1,
      paddingHorizontal: 10,
    },
    checkIcon: {
      alignItems: "flex-start",
      marginRight: 8,
      marginTop: 2,
    },
    uncheckedText: {
      opacity: 1,
    },
    checkedText: {
      textDecorationLine: "line-through",
      opacity: 0.6,
    },
    editTextInput: {
      flex: 1,
      fontSize: 18,
      fontWeight: "300",
      color: colors.text,
      margin: 0,
      // padding: 8,
      lineHeight: 24,
      // borderWidth: 1,
      // borderColor: colors.activeColor,
      minHeight: 33,
      alignItems: "center",
      paddingTop: 4,
    },
  });

  const handleAddItem = () => {
    setChecklist((prevChecklist) => [
      ...prevChecklist,
      { text: "", checked: false },
    ]);
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

    textInputsRefs.current.length = checklist.length;

    if (index < textInputsRefs.current.length - 1) {
      textInputsRefs.current[index].focus();
    } else if (index > 0 && index === textInputsRefs.current.length - 1) {
      textInputsRefs.current[index - 1].focus();
    }

    if (textInputsRefs.current.length == 1) {
      titleRef.current.focus();
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
    if (checklist[index] && newText.endsWith("\n") && editingIndex !== -1) {
      newText = newText.slice(0, -1);
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

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && editingValue === "") {
      handleRemoveItem(index);
    }
  };

  // this will be useful in the future
  const handleContentSizeChange = (event, index) => {
    const { contentSize } = event.nativeEvent;
    const { width: textWidth } = contentSize;
    textInputsRefs.current[index].measure((x, y, width, height) => {
      if (width < textWidth) {
        setIsMultiline(true);
      } else {
        setIsMultiline(false);
      }
      // console.log("w: ", width, textWidth);
    });
  };

  const renderItem = ({ item, index, drag }: any) => {
    return (
      <View style={styles.checklistItem}>
        <MaterialIcons
          name="drag-indicator"
          size={24}
          color={colors.inActiveColor}
          style={styles.checkIcon}
          onLongPress={drag}
        />
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
          onChangeText={(newText) => {
            handleEditItem(newText, index);
            setEditingValue(newText);
          }}
          onFocus={(e) => {
            setEditingValue(e.nativeEvent.text);
            setEditingIndex(index);
          }}
          onBlur={handleFinishEditing}
          style={[
            item.checked ? styles.checkedText : styles.uncheckedText,
            styles.editTextInput,
          ]}
          autoFocus
          multiline
          // multiline={isMultiline}
          onContentSizeChange={(event) => {
            handleContentSizeChange(event, index);
          }}
          onKeyPress={(event) => {
            handleKeyPress(event, index);
          }}
          blurOnSubmit={true}
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={() => {
            handleAddItem();
          }}
          textBreakStrategy="highQuality"
          scrollEnabled={false}
          selectionColor={colors.activeColor}
          // selectTextOnFocus
        />
        <TouchableOpacity onPress={() => handleRemoveItem(index)}>
          <Ionicons name="close" size={24} color={colors.inActiveColor} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView
      extraHeight={135}
      extraScrollHeight={70}
      automaticallyAdjustContentInsets={true}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustKeyboardInsets
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.insertListButton}
          onPress={handleAddItem}
        >
          <Ionicons
            name={"list-outline"}
            size={24}
            color={colors.activeColor}
          />
        </TouchableOpacity>

        <FlatList
          data={checklist}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.checklistContainer}
          keyboardShouldPersistTaps="always"
          contentInsetAdjustmentBehavior="never"
          ListHeaderComponent={
            <View>
              <TextInput
                ref={titleRef}
                value={title}
                multiline
                onChangeText={setTitle}
                placeholder="Title"
                style={styles.titleInput}
                onSubmitEditing={handleAddItem}
                placeholderTextColor={colors.inActiveColor}
                blurOnSubmit={true}
                scrollEnabled={false}
                selectionColor={colors.activeColor}
              />
            </View>
          }
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default BulletLayout;
