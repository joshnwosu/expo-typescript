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

export interface ThemeObject {
  colors: {
    light: {
      primary: string;
      text: string;
      background: string;
      card: string;
      notification: string;
      border: string;
    };
    dark: {
      primary: string;
      text: string;
      background: string;
      card: string;
      notification: string;
      border: string;
    };
  };
}

export interface ThemeMode {
  primary: string;
  text: string;
  background: string;
  card: string;
  notification: string;
  border: string;
}
