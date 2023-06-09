import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const HistoryIcon: React.FC<Props> = ({
  fill = "#292D32",
  ...props
}: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill={fill}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      opacity={0.4}
    />
    <Path
      fill={fill}
      d="M15.71 15.93a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z"
    />
  </Svg>
);
export default HistoryIcon;
