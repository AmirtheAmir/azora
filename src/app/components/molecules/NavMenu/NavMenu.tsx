import NavMenuButton, {
  type NavMenuButtonData,
} from "../../atoms/NavMenuButton";
import NavSectionTitle from "../../atoms/NavSectionTitle";
import { navMenuStyles } from "./styles";

const navigationMenuItems: NavMenuButtonData[] = [
  { label: "Home" },
  { label: "Lifetime Fan" },
  { label: "Journal", count: 2 },
  { label: "Install App", special: true },
];

export function NavMenu() {
  return (
    <div className={navMenuStyles.root}>
      <NavSectionTitle>[Menu]</NavSectionTitle>
      <div className={navMenuStyles.list}>
        {navigationMenuItems.map((item) => (
          <NavMenuButton
            count={item.count}
            key={item.label}
            label={item.label}
            special={item.special}
          />
        ))}
      </div>
    </div>
  );
}

export default NavMenu;
