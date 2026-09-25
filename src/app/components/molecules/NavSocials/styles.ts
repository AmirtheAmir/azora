import { navTransition300 } from "../../styles";

export const navSocialsStyles = {
  root: `
    flex
    w-full
    items-stretch
    gap-3xs2
  `,
  link: `
    inline-flex
    flex-1
    items-center
    justify-center
    py-sm8
    text-text-tertiary
    transition-colors
    ${navTransition300}

    hover:bg-background-brand-primary
    hover:text-text-inverse

    focus-visible:bg-background-brand-primary
    focus-visible:text-text-inverse
  `,
  icon: `
    h-[18px]
    w-[18px]

    max-[863px]:h-[14px]
    max-[863px]:w-[14px]
  `,
  divider: `
    w-3xs2
    shrink-0
    self-stretch
    bg-border-primary
  `,
} as const;
