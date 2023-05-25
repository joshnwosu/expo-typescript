import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import SvgIcon from "../common/icons";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../context/ThemeContext";

const RightHeaderIcon = () => {
  const navigation = useNavigation<any>();
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
    >
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.navigate("Notification")}
      >
        <SvgIcon
          icon="notification"
          width={20}
          height={20}
          fill={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RightHeaderIcon;
