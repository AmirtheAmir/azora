export type NavMenuButtonData = {
  label: string;
  count?: number;
  special?: boolean;
};

type NavMenuButtonProps = NavMenuButtonData;

export function NavMenuButton({ label, count, special }: NavMenuButtonProps) {
  return (
    <button
      className={`ma_h1_700 group flex w-full cursor-pointer items-baseline gap-xs6 border-0 bg-transparent px-xl24 py-xs6 text-left text-text-primary transition-colors hover:text-text-inverse focus-visible:text-text-inverse max-[1023px]:ma_h2_700 max-[1023px]:px-lg18 max-[1023px]:py-2xs4 ${
        special
          ? "hover:bg-background-brand-primary focus-visible:bg-background-brand-primary"
          : "hover:bg-background-inverse focus-visible:bg-background-inverse"
      }`}
      type="button"
    >
      <span>{label}</span>
      {count ? (
        <span className="text-text-secondary transition-colors group-hover:text-text-inverse group-focus-visible:text-text-inverse">
          [{count}]
        </span>
      ) : null}
    </button>
  );
}

export default NavMenuButton;
