import type { CSSProperties } from "react";

export type MaterialIconProps = {
  name: string;
  size?: number;
  weight?: number;
  opticalSize?: number;
  className?: string;
  title?: string;
};

export function MaterialIcon({
  name,
  size = 24,
  weight = 400,
  opticalSize = 24,
  className = "",
  title,
}: MaterialIconProps) {
  const style = {
    fontSize: size,
    fontVariationSettings: `"FILL" 1, "wght" ${weight}, "GRAD" 0, "opsz" ${opticalSize}`,
  } satisfies CSSProperties;

  return (
    <span
      aria-hidden={!title}
      aria-label={title}
      className={`material-symbols-outlined material-icon ${className}`.trim()}
      role={title ? "img" : undefined}
      style={style}
    >
      {name}
    </span>
  );
}

export default MaterialIcon;
