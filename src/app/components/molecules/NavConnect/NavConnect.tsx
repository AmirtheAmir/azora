"use client";

import { useState } from "react";
import NavBrisbaneTime from "../../atoms/NavBrisbaneTime/NavBrisbaneTime";
import MaterialIcon from "../../ui/MaterialIcon";
import NavConnectDropdown from "../NavConnectDropdown/NavConnectDropdown";

export function NavConnect() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`flex flex-col border-y-2 border-border-primary pt-3xl48 transition-[padding] duration-300 ease-in-out ${
        isOpen ? "pb-0" : "pb-3xl48"
      }`}
      aria-label="Connect"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex flex-col gap-md12 max-[1023px]:gap-xs6">
        <NavBrisbaneTime />

        <div>
          <button
            aria-controls="nav-connect-dropdown"
            aria-expanded={isOpen}
            className={`ma_h1_700 flex w-full cursor-pointer items-center justify-between border-0 px-xl24 py-xs6 text-left transition-colors hover:bg-background-inverse hover:text-text-inverse focus-visible:bg-background-inverse focus-visible:text-text-inverse max-[1023px]:ma_h2_700 max-[1023px]:px-lg18 max-[1023px]:py-2xs4 ${
              isOpen
                ? "bg-background-inverse text-text-inverse"
                : "bg-transparent text-text-primary"
            }`}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span>{"Let's Talk"}</span>
            <MaterialIcon
              className={`transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
              name="arrow_drop_down"
              size={20}
            />
          </button>
        </div>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <NavConnectDropdown />
        </div>
      </div>
    </section>
  );
}

export default NavConnect;
