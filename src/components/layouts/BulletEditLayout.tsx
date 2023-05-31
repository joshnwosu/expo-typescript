import React, { useState, useRef, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  Entypo,
  EvilIcons,
} from "@expo/vector-icons";
import ThemeContext from "../context/ThemeContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { v4 as uuidv4 } from "uuid";
import DraggableFlatlist, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

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

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleInput: {
      borderRadius: 4,
      paddingHorizontal: 10,
      fontSize: 30,
      fontWeight: "700",
      color: colors.text,
      backgroundColor: colors.background,
      marginBottom: 20,
    },
    insertListButton: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 4,
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
      marginBottom: 4,
      alignItems: "flex-start",
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
      fontSize: 17,
      fontWeight: "400",
      color: colors.text,
      margin: 0,
      minHeight: 33,
      padding: 0,
      textAlign: "left",
    },
  });

  const handleAddItem = () => {
    setChecklist((prevChecklist) => {
      const newItem = {
        key: uuidv4(),
        text: "",
        checked: false,
      };
      return [...prevChecklist, newItem];
    });
  };

  const handleToggleItem = (key: string) => {
    setChecklist((prevChecklist) => {
      const updatedChecklist = prevChecklist.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
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

  const handleKeyPress = ({ nativeEvent }, index: number) => {
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
    });
  };

  const renderItem = ({ item, index, drag }: any) => {
    return (
      <View style={styles.checklistItem}>
        <MaterialIcons
          name="drag-indicator"
          size={24}
          color={colors.inactive}
          style={[styles.checkIcon, { opacity: 0.5 }]}
          onLongPress={drag}
        />
        <Ionicons
          name={item.checked ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.checked ? colors.primary : colors.inactive}
          style={styles.checkIcon}
          onPress={() => handleToggleItem(item.key)}
        />
        <TextInput
          ref={(ref) => (textInputsRefs.current[index] = ref)}
          defaultValue={item.text}
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
          // enablesReturnKeyAutomatically={true}
          onSubmitEditing={() => {
            handleAddItem();
          }}
          textBreakStrategy="highQuality"
          scrollEnabled={false}
          selectionColor={colors.primary}
          // selectTextOnFocus
        />

        <EvilIcons
          name="close"
          size={20}
          color={colors.inactive}
          style={[styles.checkIcon, { marginRight: 0, marginLeft: 10 }]}
          onPress={() => handleRemoveItem(index)}
        />
      </View>
    );
  };

  return (
    <View
      style={{ flex: 1, flexGrow: 1 }}
      // contentContainerStyle={{ flex: 1 }}
      // behavior="padding"
    >
      <View style={styles.container}>
        {/* <TouchableOpacity
          style={styles.insertListButton}
          onPress={handleAddItem}
        >
          <Ionicons name={"list-outline"} size={24} color={colors.primary} />
        </TouchableOpacity> */}

        <View>
          <TextInput
            ref={titleRef}
            value={title}
            multiline
            onChangeText={setTitle}
            placeholder="Title"
            style={styles.titleInput}
            onSubmitEditing={() => {
              if (checklist.length > 0) {
                textInputsRefs.current[0].focus();
              } else {
                handleAddItem();
              }
            }}
            placeholderTextColor={colors.inactive}
            blurOnSubmit={true}
            scrollEnabled={false}
            selectionColor={colors.primary}
          />
        </View>

        {/* <DraggableFlatlist
          data={checklist}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          onDragEnd={({ data }) => console.log(data)}
          scrollEnabled={false}
        /> */}

        {/* <FlatList
          data={checklist}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.checklistContainer}
          keyboardShouldPersistTaps="always"
          contentInsetAdjustmentBehavior="never"
          scrollEnabled={false}
        /> */}

        <View style={styles.checklistContainer}>
          {checklist.map((item, index) => renderItem({ item, index }))}
        </View>
      </View>
    </View>
  );
};

export default BulletLayout;
