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
            name={isSmallOpen ? "arrow_drop_down" : "arrow_drop_up"}
            size={32}
          />
        </button>
      </div>

      <div
        className={`${navHeaderStyles.bottomRow} ${
          isSmallOpen ? "" : navHeaderStyles.bottomRowClosed
        }`}
      >
        <NavSocials />
        <MaterialIcon
          className={navHeaderStyles.constructionIcon}
          name="construction"
          size={20}
        />
      </div>
    </div>
  );
}

export default NavHeader;
