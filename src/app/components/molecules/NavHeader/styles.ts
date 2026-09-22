import { navHorizontalPadding } from "../../styles";

export const navHeaderStyles = {
  root: `flex flex-col gap-xs6 ${navHorizontalPadding} max-[863px]:pt-lg18`,
  topRow: "flex items-center justify-between gap-md12",
  brand: "ch_t1_600 text-text-primary max-[1023px]:ch_t2_600",
  mobileToggle:
    "hidden cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-text-brand-primary max-[863px]:inline-flex",
  mobileToggleIcon: "text-text-brand-primary",
  bottomRow: "flex items-center justify-between",
  bottomRowClosed: "max-[863px]:hidden",
  constructionIcon:
    "text-background-secondary cursor-pointer max-[1023px]:text-[18px]!",
} as const;
