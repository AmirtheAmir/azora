import ConnectDropdownItem, {
  type ConnectDropdownItemData,
} from "../../atoms/ConnectDropdownItem/ConnectDropdownItem";

const connectDropdownItems: ConnectDropdownItemData[] = [
  { icon: "email", label: "contact@email.design.au" },
  { icon: "content_copy", label: "Copy Email" },
  { icon: "send", label: "Send Message" },
];

export function NavConnectDropdown() {
  return (
    <div
      className="flex flex-col gap-lg18 bg-background-inverse p-xl24 text-text-inverse max-[1023px]:gap-md12 max-[1023px]:p-lg18"
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
