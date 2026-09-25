import {
  navActionBase,
  navActionTextStates,
} from "../../styles";

export const navMenuButtonStyles = {
  button: `
    ${navActionBase}
    ${navActionTextStates}
    group
    items-baseline
    gap-xs6
    bg-transparent
    text-text-primary
  `,
  default: `
    hover:bg-background-inverse
    focus-visible:bg-background-inverse
  `,
  special: `
    hover:bg-background-brand-primary
    focus-visible:bg-background-brand-primary
  `,
  count: `
    text-text-secondary
    transition-colors

    group-hover:text-text-inverse
    group-focus-visible:text-text-inverse
  `,
} as const;
