import { navTransition300 } from "../../styles";

export const aboutButtonStyles = {
  root: `ma_h3_700 group inline-flex cursor-pointer items-center gap-md12 border-2 border-border-brand bg-transparent py-xs6 pr-xs6 pl-md12 text-text-primary transition-colors ${navTransition300} hover:bg-background-brand-primary hover:text-text-inverse focus-visible:bg-background-brand-primary focus-visible:text-text-inverse max-[863px]:gap-xs6 max-[863px]:py-2xs4 max-[863px]:pr-2xs4 max-[863px]:pl-xs6 max-[863px]:!text-[16px] max-[863px]:!leading-[1.24]`,
  iconWrapper: `inline-flex bg-background-brand-primary p-special3 text-text-primary transition-colors ${navTransition300} group-hover:bg-background-inverse group-hover:text-text-inverse group-focus-visible:bg-background-inverse group-focus-visible:text-text-inverse`,
  icon: "max-[863px]:!text-[14px]",
} as const;
