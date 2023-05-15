export interface MainScreen {
  name: string;
  component: React.FC<any> | (() => JSX.Element);
}

export interface LabelProps {
  focused: boolean;
  color: string;
  children:
    | string
    | ((props: { focused: boolean; color: string }) => React.ReactNode);
}
