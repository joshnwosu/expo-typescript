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
    activeColor: string;
    inActiveColor: string;
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
  data: {
    name: string;
    icon?: string;
    description?: string;
    clickable?: boolean;
    message?: any;
  }[];
}

export interface GroupCardItemProps {
  name: string;
  icon: string;
  clickable?: boolean;
  description: string;
  index: string | number;
  length: number;
  message: any;
}
