export type IconName =
  | "home"
  | "location"
  | "folder"
  | "chat"
  | "profile"
  | "settings"
  | "notes"
  | "edit"
  | "search"
  | "star"
  | "library"
  | "archive"
  | "trash"
  | "tag"
  | "add"
  | "notification"
  | "history"
  | "theme"
  | "information"
  | "lock"
  | "sync"
  | "quick-action"
  | "whats-new"
  | "feedback"
  | "share"
  | "sidebar-bottom"
  | "moon"
  | "cloud-sunny"
  | "sunny"
  | "color"
  | "sunny-low";
export interface IconProps {
  icon: IconName;
  width?: number;
  height?: number;
  fill?: string;
}
