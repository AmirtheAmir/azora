import MaterialIcon from "../../ui/MaterialIcon";
import NavSocials from "../NavSocials/NavSocials";

type NavHeaderProps = {
  isSmallOpen: boolean;
  onSmallToggle: () => void;
};

export function NavHeader({
  isSmallOpen,
  onSmallToggle,
}: NavHeaderProps) {
  return (
    <div className="flex flex-col gap-xs6 px-xl24 max-[1023px]:px-lg18 max-[863px]:pt-lg18">
      <div className="flex items-center justify-between gap-md12">
        <span className="ch_t1_600 text-text-primary max-[1023px]:ch_t2_600">
          AZORA
        </span>
        <button
          aria-expanded={isSmallOpen}
          aria-label={isSmallOpen ? "Close navigation" : "Open navigation"}
          className="hidden cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-text-brand-primary max-[863px]:inline-flex"
          onClick={onSmallToggle}
          type="button"
        >
          <MaterialIcon
            className="text-text-brand-primary"
            name={isSmallOpen ? "arrow_drop_down" : "arrow_drop_up"}
            size={32}
          />
        </button>
      </div>

      <div
        className={`flex items-center justify-between ${
          isSmallOpen ? "" : "max-[863px]:hidden"
        }`}
      >
        <NavSocials />
        <MaterialIcon
          className="text-background-secondary cursor-pointer max-[1023px]:text-[18px]!"
          name="construction"
          size={20}
        />
      </div>
    </div>
  );
}

export default NavHeader;
