import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const FolderIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill={fill ?? "#292D32"}
      d="M15.72 2H8.28c-.38 0-.7.32-.7.7 0 .38.32.7.7.7h3.26l1.4 1.86c.31.41.35.47.93.47h3.72c.38 0 .75.05 1.11.15.04.18.06.36.06.55v.35c0 .38.32.7.7.7.38 0 .7-.32.7-.7v-.36c-.02-2.44-2-4.42-4.44-4.42Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M20.14 6.54a4.18 4.18 0 0 0-1.45-.67c-.35-.1-.73-.15-1.11-.15h-3.72c-.58 0-.62-.06-.93-.47l-1.4-1.86C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42v11.16C2 20.02 3.98 22 6.42 22h11.16c2.44 0 4.42-1.98 4.42-4.42v-7.44c0-1.49-.73-2.8-1.86-3.6ZM14.33 16H9.67c-.39 0-.7-.31-.7-.7 0-.38.31-.7.7-.7h4.65c.38 0 .7.32.7.7 0 .39-.31.7-.69.7Z"
    />
  </Svg>
);
export default FolderIcon;
