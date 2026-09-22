"use client";

import { useState } from "react";
import NavConnect from "../molecules/NavConnect/NavConnect";
import NavHeader from "../molecules/NavHeader/NavHeader";
import NavMenu from "../molecules/NavMenu/NavMenu";
import NavSongs from "../molecules/NavSongs/NavSongs";

export function Navigation() {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const smallClosedClass = isSmallOpen
    ? "contents"
    : "contents max-[863px]:hidden";

  return (
    <aside
      className={`box-border flex h-dvh w-[296px] shrink-0 scroll-smooth flex-col gap-xl30 overflow-y-auto border-r-2 border-border-primary bg-background-primary py-xl24 text-text-primary [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&_*]:box-border max-[1023px]:w-[270px] max-[1023px]:gap-xl24 max-[1023px]:py-lg18 max-[863px]:fixed max-[863px]:inset-x-0 max-[863px]:bottom-0 max-[863px]:z-40 max-[863px]:w-full max-[863px]:gap-xl24 max-[863px]:overflow-y-auto max-[863px]:border-r-0 max-[863px]:border-t-2 max-[863px]:py-0 max-[863px]:pb-xs6 max-[863px]:transition-[height] max-[863px]:duration-200 ${
        isSmallOpen ? "max-[863px]:h-dvh" : "max-[863px]:h-[92px]"
      }`}
    >
      <section
        className="flex flex-col gap-xl30 max-[1023px]:gap-xl24"
        aria-label="Primary"
      >
        <NavHeader
          isSmallOpen={isSmallOpen}
          onSmallToggle={() => setIsSmallOpen((current) => !current)}
        />
        <div className={smallClosedClass}>
          <NavMenu />
        </div>
      </section>

      <div className={smallClosedClass}>
        <NavConnect />
        <NavSongs />
      </div>
    </aside>
  );
}

export default Navigation;
