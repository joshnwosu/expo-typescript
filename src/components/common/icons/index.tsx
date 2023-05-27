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
import HistoryIcon from "./HistoryIcon";
import ThemeIcon from "./ThemeIcon";
import InformationIcon from "./InformationIcon";
import LockIcon from "./LockIcon";
import SyncIcon from "./SyncIcon";
import FeedbackIcon from "./FeedbackIcon";
import ShareIcon from "./ShareIcon";
import QuickActionIcon from "./QuickActionIcon";
import WhatsNewIcon from "./WhatsNewIcon";
import SidebarBottomIcon from "./SidebarBottomIcon";

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
    case "history":
      return <HistoryIcon {...rest} />;
    case "theme":
      return <ThemeIcon {...rest} />;
    case "information":
      return <InformationIcon {...rest} />;
    case "lock":
      return <LockIcon {...rest} />;
    case "sync":
      return <SyncIcon {...rest} />;
    case "feedback":
      return <FeedbackIcon {...rest} />;
    case "share":
      return <ShareIcon {...rest} />;
    case "quick-action":
      return <QuickActionIcon {...rest} />;
    case "whats-new":
      return <WhatsNewIcon {...rest} />;
    case "sidebar-bottom":
      return <SidebarBottomIcon {...rest} />;

    default:
      return null;
  }
};

export default SvgIcon;
