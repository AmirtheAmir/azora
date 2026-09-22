import NavMenuButton, {
  type NavMenuButtonData,
} from "../../atoms/NavMenuButton/NavMenuButton";
import NavSectionTitle from "../../atoms/NavSectionTitle/NavSectionTitle";

const navigationMenuItems: NavMenuButtonData[] = [
  { label: "Home" },
  { label: "Lifetime Fan" },
  { label: "Journal", count: 2 },
  { label: "Install App", special: true },
];

export function NavMenu() {
  return (
    <div className="flex flex-col gap-3xs2">
      <NavSectionTitle>[Menu]</NavSectionTitle>
      <div className="flex flex-col gap-3xs2">
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
