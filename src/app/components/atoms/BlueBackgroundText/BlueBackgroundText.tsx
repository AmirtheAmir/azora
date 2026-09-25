import type { ReactNode } from "react";
import { blueBackgroundTextStyles } from "./styles";

type BlueBackgroundTextProps = {
  children: ReactNode;
};

export function BlueBackgroundText({ children }: BlueBackgroundTextProps) {
  return <span className={blueBackgroundTextStyles.root}>{children}</span>;
}

export default BlueBackgroundText;
