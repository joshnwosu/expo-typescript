import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const SettingsIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    {/* <Path
      fill={fill ?? "#292D32"}
      d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
    /> */}

    {/* <Path
      fill={fill ?? "#292D32"}
      d="M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75Z"
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M15.21 22.19c-.21 0-.42-.03-.63-.08-.62-.17-1.14-.56-1.47-1.11l-.12-.2c-.59-1.02-1.4-1.02-1.99 0l-.11.19c-.33.56-.85.96-1.47 1.12-.63.17-1.28.08-1.83-.25l-1.72-.99a2.65 2.65 0 0 1-.98-3.62c.29-.51.37-.97.2-1.26-.17-.29-.6-.46-1.19-.46-1.46 0-2.65-1.19-2.65-2.65v-1.76c0-1.46 1.19-2.65 2.65-2.65.59 0 1.02-.17 1.19-.46.17-.29.1-.75-.2-1.26-.35-.61-.44-1.33-.26-2.01.18-.69.62-1.26 1.24-1.61l1.73-.99c1.13-.67 2.62-.28 3.3.87l.12.2c.59 1.02 1.4 1.02 1.99 0l.11-.19c.68-1.16 2.17-1.55 3.31-.87l1.72.99a2.65 2.65 0 0 1 .98 3.62c-.29.51-.37.97-.2 1.26.17.29.6.46 1.19.46 1.46 0 2.65 1.19 2.65 2.65v1.76c0 1.46-1.19 2.65-2.65 2.65-.59 0-1.02.17-1.19.46-.17.29-.1.75.2 1.26.35.61.45 1.33.26 2.01a2.58 2.58 0 0 1-1.24 1.61l-1.73.99c-.38.21-.79.32-1.21.32ZM12 18.49c.89 0 1.72.56 2.29 1.55l.11.19c.12.21.32.36.56.42.24.06.48.03.68-.09l1.73-1a1.157 1.157 0 0 0 .43-1.57c-.57-.98-.64-1.99-.2-2.76.44-.77 1.35-1.21 2.49-1.21.64 0 1.15-.51 1.15-1.15v-1.76c0-.63-.51-1.15-1.15-1.15-1.14 0-2.05-.44-2.49-1.21-.44-.77-.37-1.78.2-2.76.15-.26.19-.57.11-.87-.08-.3-.27-.54-.53-.7l-1.73-.99a.92.92 0 0 0-1.26.33l-.11.19c-.57.99-1.4 1.55-2.29 1.55-.89 0-1.72-.56-2.29-1.55l-.11-.2a.918.918 0 0 0-1.24-.32l-1.73 1A1.157 1.157 0 0 0 6.19 6c.57.98.64 1.99.2 2.76-.44.77-1.35 1.21-2.49 1.21-.64 0-1.15.51-1.15 1.15v1.76c0 .63.51 1.15 1.15 1.15 1.14 0 2.05.44 2.49 1.21.44.77.37 1.78-.2 2.76-.15.26-.19.57-.11.87.08.3.27.54.53.7l1.73.99c.21.13.46.16.69.1.24-.06.44-.22.57-.43l.11-.19c.57-.98 1.4-1.55 2.29-1.55Z"
    /> */}

    <Path
      fill={fill ?? "#292D32"}
      d="M12 22.63c-.67 0-1.35-.15-1.88-.46L4.62 19c-2.24-1.51-2.38-1.74-2.38-4.11V9.11c0-2.37.13-2.6 2.33-4.09l5.54-3.2c1.05-.61 2.7-.61 3.75 0L19.38 5c2.24 1.51 2.38 1.74 2.38 4.11v5.77c0 2.37-.13 2.6-2.33 4.09l-5.54 3.2c-.54.31-1.22.46-1.89.46Zm0-19.76c-.42 0-.83.08-1.12.25L5.38 6.3C3.75 7.4 3.75 7.4 3.75 9.11v5.77c0 1.71 0 1.71 1.67 2.84l5.46 3.15c.59.34 1.66.34 2.25 0l5.5-3.18c1.62-1.1 1.62-1.1 1.62-2.81V9.11c0-1.71 0-1.71-1.67-2.84l-5.46-3.15c-.29-.17-.7-.25-1.12-.25Z"
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75Z"
    />
  </Svg>
);
export default SettingsIcon;
