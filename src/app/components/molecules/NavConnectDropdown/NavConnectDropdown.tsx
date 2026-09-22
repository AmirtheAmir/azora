import ConnectDropdownItem, {
  type ConnectDropdownItemData,
} from "../../atoms/ConnectDropdownItem";
import { navConnectDropdownStyles } from "./styles";

const connectDropdownItems: ConnectDropdownItemData[] = [
  { icon: "email", label: "contact@email.design.au" },
  { icon: "content_copy", label: "Copy Email" },
  { icon: "send", label: "Send Message" },
];

export function NavConnectDropdown() {
  return (
    <div
      className={navConnectDropdownStyles.root}
      id="nav-connect-dropdown"
      role="menu"
    >
      {connectDropdownItems.map((item) => (
        <ConnectDropdownItem
          icon={item.icon}
          key={item.label}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default NavConnectDropdown;
