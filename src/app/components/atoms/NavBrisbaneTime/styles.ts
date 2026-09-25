import { navHorizontalPadding } from "../../styles";

export const navBrisbaneTimeStyles = {
  container: `
    ma_h5_700
    flex
    gap-md12
    ${navHorizontalPadding}
    text-text-secondary

    max-[1024px]:gap-xs6
  `,
  location: `
    text-text-primary
  `,
} as const;
