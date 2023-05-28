import React from "react";
import { Switch, SwitchProps } from "react-native";

const CustomSwitch = ({ value, onValueChange, ...rest }: SwitchProps) => {
  return <Switch value={value} onValueChange={onValueChange} {...rest} />;
};

export default CustomSwitch;
