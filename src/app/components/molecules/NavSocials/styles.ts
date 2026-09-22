import { navTransition300 } from "../../styles";

export const navSocialsStyles = {
  root: "flex items-center gap-lg18",
  link: `inline-flex text-text-secondary transition-colors ${navTransition300} hover:text-text-primary focus-visible:text-text-primary`,
} as const;
