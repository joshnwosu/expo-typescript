import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import ListLayout from "../components/layouts/ListLayout";
import ScreenLayout from "../components/layouts/ScreenLayout";
import BulletEditLayout from "../components/layouts/BulletEditLayout";
import { GroupCardProps } from "../types";
import GroupCardList from "../components/layouts/group-card/GroupCardList";

const descriptions = {
  Account: "Manage your account settings",
  Notifications: "Manage your notification preferences",
  Sync: "Last successful synced: ",
  Theme: "Customize the app theme",
  "Navigation Menu": "Configure the navigation menu",
  "Quick Actions": "Manage quick actions",
  "Locked Notes": "Protect your notes with a lock",
  Passcode: "Set up a passcode for additional security",
  "Help & Feedback": "Get help and provide feedback",
  "About Us": "Learn more about the app and the team",
  "What's New": "Discover the latest features and updates",
  "Share Memora": "Share the app with others",
};

const GENERAL = [
  { name: "Account", icon: "profile", clickable: true },
  {
    name: "Notifications",
    icon: "notification",
    clickable: true,
    message: "On",
  },
  { name: "Sync", icon: "sync", description: "Last successful synced: " },
];

const APPEARANCE = [
  {
    name: "Theme",
    icon: "theme",
    clickable: true,
    message: (
      <View
        style={{
          height: 20,
          aspectRatio: 1,
          borderRadius: 30,
          backgroundColor: "tomato",
        }}
      />
    ),
  },
  { name: "Navigation Menu", icon: "sidebarBottom", clickable: true },
  { name: "Quick Actions", icon: "quickAction", clickable: true },
];

const SECURITY = [
  { name: "Locked Notes", icon: "notes", clickable: true },
  { name: "Passcode", icon: "lock", clickable: true },
];

const SUPPORT = [
  { name: "Help & Feedback", icon: "feedback", clickable: true },
  { name: "About Us", icon: "information", clickable: true },
  { name: "What's New", icon: "whatsNew", clickable: true },
  { name: "Share Memora", icon: "share" },
];

// Add descriptions to the arrays
const addDescriptions = (array: GroupCardProps["data"]) => {
  return array.map((item) => ({
    ...item,
    description: descriptions[item.name],
  }));
};

const GENERAL_WITH_DESCRIPTIONS = addDescriptions(GENERAL);
const APPEARANCE_WITH_DESCRIPTIONS = addDescriptions(APPEARANCE);
const SECURITY_WITH_DESCRIPTIONS = addDescriptions(SECURITY);
const SUPPORT_WITH_DESCRIPTIONS = addDescriptions(SUPPORT);

export default function SettingsScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 15 }}
      showsVerticalScrollIndicator={false}
    >
      {/* <ListLayout /> */}
      {/* <DragList /> */}
      {/* <BulletEditLayout /> */}

      <GroupCardList title="General" data={GENERAL_WITH_DESCRIPTIONS} />
      <GroupCardList title="Appearance" data={APPEARANCE_WITH_DESCRIPTIONS} />
      <GroupCardList title="Privacy" data={SECURITY_WITH_DESCRIPTIONS} />
      <GroupCardList title="Support" data={SUPPORT_WITH_DESCRIPTIONS} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
