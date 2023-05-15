import HomeIcon from "./HomeIcon";
import ChatIcon from "./ChatIcon";
import ProfileIcon from "./ProfileIcon";
import SettingIcon from "./SettingIcon";

interface IconProps {
  icon: string;
  size: number;
  fill: string;
}

const SvgIcon = ({ icon, size, fill }: IconProps) => {
  switch (icon) {
    case "home":
      return <HomeIcon width={size} height={size} fill={fill} />;
    case "chat":
      return <ChatIcon width={size} height={size} fill={fill} />;
    case "profile":
      return <ProfileIcon width={size} height={size} fill={fill} />;
    case "setting":
      return <SettingIcon width={size} height={size} fill={fill} />;
    default:
      return null;
  }
};

export default SvgIcon;
