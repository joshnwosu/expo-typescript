import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const ArchiveIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    {/* <Path
      fill={fill ?? "#292D32"}
      d="M19.5 9.97V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3V9.97c.16.02.33.03.5.03h14c.17 0 .34-.01.5-.03Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M22 5v2c0 1.83-.83 2.82-2.5 2.97-.16.02-.33.03-.5.03H5c-.17 0-.34-.01-.5-.03C2.83 9.82 2 8.83 2 7V5c0-2 1-3 3-3h14c2 0 3 1 3 3ZM13.82 14.75h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    /> */}

    <Path
      fill={fill ?? "#292D32"}
      d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M12 10.28c-1.02 0-2.04-.18-3.01-.53a.75.75 0 0 1-.45-.96c.15-.39.58-.59.97-.45 1.61.58 3.38.58 4.99 0a.75.75 0 1 1 .51 1.41c-.97.35-1.99.53-3.01.53Z"
    />
  </Svg>
);
export default ArchiveIcon;
