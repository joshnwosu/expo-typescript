import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import * as Haptics from "expo-haptics";

interface Props extends TouchableOpacityProps {
  children: JSX.Element | React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
}

const HapticTouch: React.FC<Props> = ({
  children,
  onPress,
  style,
  ...rest
}) => {
  const handlePress = () => {
    onPress();
    Haptics.selectionAsync();
  };
  return (
    <TouchableOpacity onPress={handlePress} style={style} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default HapticTouch;
