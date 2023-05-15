import HomeIcon from "./HomeIcon";
import ChatIcon from "./ChatIcon";
import ProfileIcon from "./ProfileIcon";
import SettingIcon from "./SettingIcon";
import LocationIcon from "./LocationIcon";

interface IconProps {
  icon: string;
  size: number;
  fill: string;
}

const SvgIcon = ({ icon, ...rest }: IconProps) => {
  switch (icon) {
    case "home":
      return <HomeIcon {...rest} />;
    case "location":
      return <LocationIcon {...rest} />;
    case "chat":
      return <ChatIcon {...rest} />;
    case "profile":
      return <ProfileIcon {...rest} />;
    case "setting":
      return <SettingIcon {...rest} />;
    default:
      return null;
  }
};

export default SvgIcon;
