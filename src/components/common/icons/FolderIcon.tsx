import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const FolderIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    {/* <Path
      fill={fill ?? "#292D32"}
      d="M15.72 2H8.28c-.38 0-.7.32-.7.7 0 .38.32.7.7.7h3.26l1.4 1.86c.31.41.35.47.93.47h3.72c.38 0 .75.05 1.11.15.04.18.06.36.06.55v.35c0 .38.32.7.7.7.38 0 .7-.32.7-.7v-.36c-.02-2.44-2-4.42-4.44-4.42Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M20.14 6.54a4.18 4.18 0 0 0-1.45-.67c-.35-.1-.73-.15-1.11-.15h-3.72c-.58 0-.62-.06-.93-.47l-1.4-1.86C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42v11.16C2 20.02 3.98 22 6.42 22h11.16c2.44 0 4.42-1.98 4.42-4.42v-7.44c0-1.49-.73-2.8-1.86-3.6ZM14.33 16H9.67c-.39 0-.7-.31-.7-.7 0-.38.31-.7.7-.7h4.65c.38 0 .7.32.7.7 0 .39-.31.7-.69.7Z"
    /> */}

    {/* <Path
      fill={fill ?? "#292D32"}
      d="M22 11.07v5.58C22 19.6 19.6 22 16.65 22h-9.3C4.4 22 2 19.6 2 16.65V9.44h19.74c.15.45.23.91.25 1.4.01.07.01.16.01.23Z"
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71Z"
      opacity={0.4}
    /> */}

    <Path
      fill={fill ?? "#292D32"}
      d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75Zm-10-20c-3.58 0-4.25.68-4.25 4.25v10c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-6c0-3.57-.67-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.68-.9-1.8-.9H7Z"
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M20 7.13c-.41 0-.75-.34-.75-.75V5c0-1.58-.67-2.25-2.25-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c2.42 0 3.75 1.33 3.75 3.75v1.38c0 .41-.34.75-.75.75Z"
    />
  </Svg>
);
export default FolderIcon;
