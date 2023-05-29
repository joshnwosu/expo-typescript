import React from "react";
import { Switch, SwitchProps } from "react-native";
import ThemeContext from "../context/ThemeContext";

const CustomSwitch = ({ value, onValueChange, ...rest }: SwitchProps) => {
  const {
    theme: { colors },
  } = React.useContext(ThemeContext);
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      {...rest}
      trackColor={{ true: colors.primary }}
      thumbColor={"#ffffff"}
    />
  );
};

export default CustomSwitch;
