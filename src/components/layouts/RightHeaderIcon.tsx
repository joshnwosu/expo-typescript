import { View, Text, TouchableOpacity } from "react-native";
import SvgIcon from "../common/icons";
import { useNavigation } from "@react-navigation/native";

const RightHeaderIcon = () => {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
    >
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.navigate("Notification")}
      >
        <SvgIcon icon="notification" width={20} height={20} fill="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default RightHeaderIcon;
