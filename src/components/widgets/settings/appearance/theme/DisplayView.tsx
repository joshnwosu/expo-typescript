import { View, Text } from "react-native";
import React from "react";
import GroupCard from "../../../../layouts/group-card/GroupCard";

const DisplayView = () => {
  return (
    <GroupCard title="Display View" description="Toggle between Display vews.">
      <View>
        <Text>DisplayView</Text>
      </View>
    </GroupCard>
  );
};

export default DisplayView;
