import type { ReactNode } from "react";
import { navSectionTitleStyles } from "./styles";

type NavSectionTitleProps = {
  children: ReactNode;
};

export function NavSectionTitle({
  children,
}: NavSectionTitleProps) {
  return (
    <span className={navSectionTitleStyles.root}>
      {children}
    </span>
  );
}

export default NavSectionTitle;
