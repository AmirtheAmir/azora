import { navTransition300 } from "../../styles";

export const listenButtonStyles = {
  root: `ma_h3_700 group inline-flex cursor-pointer items-center gap-0 overflow-hidden border-2 border-border-brand bg-transparent px-md12 py-xs6 text-text-primary transition-[gap,padding,background-color,color] ${navTransition300} hover:gap-md12 hover:bg-background-brand-primary hover:pr-xs6 hover:text-text-inverse focus-visible:gap-md12 focus-visible:bg-background-brand-primary focus-visible:pr-xs6 focus-visible:text-text-inverse max-[863px]:px-xs6 max-[863px]:py-2xs4 max-[863px]:hover:gap-xs6 max-[863px]:hover:pr-2xs4 max-[863px]:focus-visible:gap-xs6 max-[863px]:focus-visible:pr-2xs4 max-[863px]:!text-[16px] max-[863px]:!leading-[1.24]`,
  platforms: `flex w-max max-w-0 shrink-0 items-center gap-xs6 overflow-hidden opacity-0 transition-[max-width,opacity] ${navTransition300} group-hover:max-w-[54px] group-hover:opacity-100 group-focus-visible:max-w-[54px] group-focus-visible:opacity-100 max-[863px]:gap-2xs4 max-[863px]:group-hover:max-w-[44px] max-[863px]:group-focus-visible:max-w-[44px]`,
  platform: "inline-flex shrink-0 bg-background-inverse p-special3 text-text-inverse",
  icon: "h-[18px] w-[18px] max-[863px]:h-[14px] max-[863px]:w-[14px]",
} as const;
