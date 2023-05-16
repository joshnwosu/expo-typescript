import HomeIcon from "./HomeIcon";
import ChatIcon from "./ChatIcon";
import ProfileIcon from "./ProfileIcon";
import LocationIcon from "./LocationIcon";
import FolderIcon from "./FolderIcon";
import EditIcon from "./EditIcon";
import NoteIcon from "./NoteIcon";
import SettingsIcon from "./SettingsIcon";
import SearchIcon from "./SearchIcon";
import LibraryIcon from "./LibraryIcon";
import StarIcon from "./StarIcon";
import ArchiveIcon from "./ArchiveIcon";
import TrashIcon from "./TrashIcon";
import TagIcon from "./TagIcon";
import AddIcon from "./AddIcon";
import NotitficationIcon from "./NotificationIcon";

interface IconProps {
  icon: string;
  width?: number;
  height?: number;
  fill?: string;
}

const SvgIcon = ({ icon, ...rest }: IconProps) => {
  switch (icon) {
    case "home":
      return <HomeIcon {...rest} />;
    case "location":
      return <LocationIcon {...rest} />;
    case "folder":
      return <FolderIcon {...rest} />;
    case "chat":
      return <ChatIcon {...rest} />;
    case "profile":
      return <ProfileIcon {...rest} />;
    case "settings":
      return <SettingsIcon {...rest} />;
    case "notes":
      return <NoteIcon {...rest} />;
    case "edit":
      return <EditIcon {...rest} />;
    case "search":
      return <SearchIcon {...rest} />;
    case "library":
      return <LibraryIcon {...rest} />;
    case "star":
      return <StarIcon {...rest} />;
    case "archive":
      return <ArchiveIcon {...rest} />;
    case "trash":
      return <TrashIcon {...rest} />;
    case "tag":
      return <TagIcon {...rest} />;
    case "add":
      return <AddIcon {...rest} />;
    case "notification":
      return <NotitficationIcon {...rest} />;
    default:
      return null;
  }
};

export default SvgIcon;
