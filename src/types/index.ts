export interface MainScreen {
  name: string;
  component: React.FC<any> | (() => JSX.Element) | any;
}

export interface LabelProps {
  focused: boolean;
  color: string;
  children:
    | string
    | ((props: { focused: boolean; color: string }) => React.ReactNode);
}

export interface ThemeProps {
  dark: boolean;
  colors: {
    primary: string;
    text: string;
    background: string;
    card: string;
    notification: string;
    border: string;
    inactive: string;
    topSeperator: string;
    bottomSeperator: string;
  };
}

export interface ThemeObject {
  light: ThemeProps;
  dark: ThemeProps;
}

export interface GroupCardProps {
  title?: string;
  children: JSX.Element | React.ReactNode;
  description?: string;
}

export interface GroupCardListProps {
  title?: string;
  description?: string;
  data?: GroupCardItemProps["item"][];
}

export interface GroupCardItemProps {
  item?: {
    name?: string;
    icon?: string;
    clickable?: boolean;
    description?: string;
    message?: any;
    component?: JSX.Element;
  };
  index?: string | number;
  length?: number;
}

export interface BackgroundProps {
  name: "system" | "light" | "dark";
  backgroundColor: "automatic" | "#FFFFFF" | "#000000";
  options?: ["#FFFFFF", "#000000"];
}

export type AccentColor =
  | "#ff6347"
  | "#5d68f9"
  | "#3269FF"
  | "#FFD947"
  | "#AE3B76"
  | "#0BEAAF"
  | "#FE7745"
  | "#017AFF"
  | "#A450A6"
  | "#F64F9D"
  | "#FF5256"
  | "#F88119"
  | "#FFC702"
  | "#61BA46"
  | "#8C8C8C";
