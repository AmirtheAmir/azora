import { navHorizontalPadding } from "../../styles";

export const navHeaderStyles = {
  root: `
    flex
    flex-col
    gap-2xs4
    ${navHorizontalPadding}

    max-[659px]:pt-lg18
  `,
  topRow: `
    flex
    items-center
    justify-between
    gap-md12
  `,
  brand: `
    ch_t1_600
    text-text-primary

    max-[1024px]:!text-[39.8px]
    max-[1024px]:!leading-[1.21]
  `,
  mobileToggle: `
    hidden
    cursor-pointer
    items-center
    justify-center
    border-0
    bg-transparent
    p-0
    text-text-brand-primary

    max-[659px]:inline-flex
  `,
  mobileToggleIcon: `
    text-text-primary
  `,
  bottomRow: `
    w-full
  `,
  bottomRowClosed: `
    max-[659px]:hidden
  `,
} as const;
