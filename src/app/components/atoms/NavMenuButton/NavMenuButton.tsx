import { navMenuButtonStyles } from "./styles";

export type NavMenuButtonData = {
  label: string;
  count?: number;
  special?: boolean;
};

type NavMenuButtonProps = NavMenuButtonData;

export function NavMenuButton({ label, count, special }: NavMenuButtonProps) {
  return (
    <button
      className={`${navMenuButtonStyles.button} ${
        special ? navMenuButtonStyles.special : navMenuButtonStyles.default
      }`}
      type="button"
    >
      <span>{label}</span>
      {count ? (
        <span className={navMenuButtonStyles.count}>
          [{count}]
        </span>
      ) : null}
    </button>
  );
}

export default NavMenuButton;
