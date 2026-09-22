import ConnectDropdownItem, {
  type ConnectDropdownItemData,
} from "../../atoms/ConnectDropdownItem";
import { navConnectDropdownStyles } from "./styles";

const connectDropdownItems: ConnectDropdownItemData[] = [
  { icon: "content_copy", label: "Copy Email" },
  { icon: "send", label: "Send Message" },
];

const contactEmail = "contact@email.design.au";

export function NavConnectDropdown() {
  return (
    <div
      className={navConnectDropdownStyles.root}
      id="nav-connect-dropdown"
    >
      <div className={navConnectDropdownStyles.actions}>
        {connectDropdownItems.map((item) => (
          <ConnectDropdownItem
            icon={item.icon}
            key={item.label}
            label={item.label}
          />
        ))}
      </div>
      <span className={navConnectDropdownStyles.subtitle}>{contactEmail}</span>
    </div>
  );
}

export default NavConnectDropdown;
