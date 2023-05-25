import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const StarIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    {/* <Path
      fill={fill ?? "#292D32"}
      d="M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19L5.74 16Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M18.7 14.46c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7L17.21 8.79c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.42 2.43Z"
    /> */}
    <Path
      fill={fill ?? "#292D32"}
      d="M17.66 22.67c-.53 0-1.21-.17-2.06-.67l-2.99-1.77c-.31-.18-.91-.18-1.21 0L8.4 22c-1.77 1.05-2.81.63-3.28.29-.46-.34-1.18-1.21-.71-3.21l.71-3.07c.08-.32-.08-.87-.32-1.11l-2.48-2.48c-1.24-1.24-1.14-2.3-.97-2.82.17-.52.71-1.44 2.43-1.73l3.19-.53c.3-.05.73-.37.86-.64L9.6 3.17c.8-1.61 1.85-1.85 2.4-1.85.55 0 1.6.24 2.4 1.85l1.76 3.52c.14.27.57.59.87.64l3.19.53c1.73.29 2.27 1.21 2.43 1.73.16.52.26 1.58-.97 2.82L19.2 14.9c-.24.24-.39.78-.32 1.11l.71 3.07c.46 2-.25 2.87-.71 3.21-.25.18-.65.38-1.22.38ZM12 18.59c.49 0 .98.12 1.37.35l2.99 1.77c.87.52 1.42.52 1.63.37.21-.15.36-.68.14-1.66l-.71-3.07c-.19-.83.12-1.9.72-2.51l2.48-2.48c.49-.49.71-.97.61-1.3-.11-.33-.57-.6-1.25-.71l-3.19-.53c-.77-.13-1.61-.75-1.96-1.45l-1.76-3.52c-.32-.64-.72-1.02-1.07-1.02-.35 0-.75.38-1.06 1.02L9.17 7.37c-.35.7-1.19 1.32-1.96 1.45l-3.18.53c-.68.11-1.14.38-1.25.71-.11.33.12.82.61 1.3l2.48 2.48c.6.6.91 1.68.72 2.51l-.71 3.07c-.23.99-.07 1.51.14 1.66.21.15.75.14 1.63-.37l2.99-1.77c.38-.23.87-.35 1.36-.35Z"
    />
  </Svg>
);
export default StarIcon;
