import MaterialIcon from "../../ui/MaterialIcon";
import NavSocials from "../NavSocials";
import { navHeaderStyles } from "./styles";

type NavHeaderProps = {
  isSmallOpen: boolean;
  onSmallToggle: () => void;
};

export function NavHeader({
  isSmallOpen,
  onSmallToggle,
}: NavHeaderProps) {
  return (
    <div className={navHeaderStyles.root}>
      <div className={navHeaderStyles.topRow}>
        <span className={navHeaderStyles.brand}>
          AZORA
        </span>
        <button
          aria-expanded={isSmallOpen}
          aria-label={isSmallOpen ? "Close navigation" : "Open navigation"}
          className={navHeaderStyles.mobileToggle}
          onClick={onSmallToggle}
          type="button"
        >
          <MaterialIcon
            className={navHeaderStyles.mobileToggleIcon}
            name={isSmallOpen ? "unfold_less" : "unfold_more"}
            size={14}
          />
        </button>
      </div>

      <div
        className={`${navHeaderStyles.bottomRow} ${
          isSmallOpen ? "" : navHeaderStyles.bottomRowClosed
        }`}
      >
        <NavSocials />
      </div>
    </div>
  );
}

export default NavHeader;
