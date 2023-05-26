import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const WhatsNewIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill={fill ?? "#292D32"}
      d="M16.38 22.75H3.24c-.95 0-1.83-.44-2.4-1.21-.58-.78-.75-1.76-.46-2.69L4.59 5.32A2.982 2.982 0 0 1 7.45 3.2h12.3c1.21 0 2.3.72 2.76 1.84.25.58.3 1.24.15 1.89l-3.37 13.53a2.976 2.976 0 0 1-2.91 2.29ZM7.46 4.71a1.5 1.5 0 0 0-1.43 1.06L1.82 19.3c-.14.47-.06.96.24 1.36.28.38.72.6 1.19.6h13.14c.69 0 1.29-.47 1.45-1.14l3.37-13.54c.08-.33.06-.66-.07-.95-.24-.57-.77-.93-1.38-.93H7.46v.01Z"
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M20.78 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.78c.41 0 .79-.17 1.07-.47.28-.3.42-.7.39-1.11l-.99-13.62c-.03-.41.28-.77.69-.8.41-.02.77.28.8.69l.99 13.62c.06.82-.23 1.64-.79 2.24-.55.61-1.34.95-2.16.95ZM9.68 7.13c-.06 0-.12-.01-.18-.02a.75.75 0 0 1-.55-.91l1.04-4.32a.751.751 0 1 1 1.46.36l-1.04 4.32c-.08.34-.39.57-.73.57ZM16.38 7.14c-.05 0-.11 0-.16-.02a.765.765 0 0 1-.58-.89l.94-4.34c.09-.41.49-.66.89-.58.4.08.66.49.58.89l-.94 4.34c-.07.36-.38.6-.73.6ZM15.7 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.7 16.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
);
export default WhatsNewIcon;
