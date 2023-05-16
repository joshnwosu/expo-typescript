import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const TagIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill={fill ?? "#292D32"}
      d="m4.17 15.3 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M9.5 12.38a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76ZM13 17.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l4-4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22Z"
    />
  </Svg>
);
export default TagIcon;
