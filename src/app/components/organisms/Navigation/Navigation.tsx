"use client";

import { useState } from "react";
import NavConnect from "../../molecules/NavConnect";
import NavHeader from "../../molecules/NavHeader";
import NavMenu from "../../molecules/NavMenu";
import NavSongs from "../../molecules/NavSongs";
import { navigationStyles } from "./styles";

export function Navigation() {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const smallClosedClass = isSmallOpen
    ? navigationStyles.visibleContent
    : navigationStyles.hiddenContent;

  return (
    <aside
      className={`${navigationStyles.root} ${
        isSmallOpen ? navigationStyles.open : navigationStyles.closed
      }`}
    >
      <section className={navigationStyles.primary} aria-label="Primary">
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
