import type { ReactNode } from "react";

type NavSectionTitleProps = {
  children: ReactNode;
};

export function NavSectionTitle({
  children,
}: NavSectionTitleProps) {
  return (
    <span className="ma_h5_700 px-xl24 text-text-tertiary max-[1023px]:px-lg18">
      {children}
    </span>
  );
}

export default NavSectionTitle;
