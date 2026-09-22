"use client";

import { useState } from "react";
import NavBrisbaneTime from "../../atoms/NavBrisbaneTime";
import MaterialIcon from "../../ui/MaterialIcon";
import NavConnectDropdown from "../NavConnectDropdown";
import { navConnectStyles } from "./styles";

export function NavConnect() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`${navConnectStyles.root} ${
        isOpen
          ? navConnectStyles.openPadding
          : navConnectStyles.closedPadding
      }`}
      aria-label="Connect"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={navConnectStyles.content}>
        <NavBrisbaneTime />

        <div>
          <button
            aria-controls="nav-connect-dropdown"
            aria-expanded={isOpen}
            className={`${navConnectStyles.button} ${
              isOpen
                ? navConnectStyles.buttonOpen
                : navConnectStyles.buttonClosed
            }`}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span>{"Let's Talk"}</span>
            <MaterialIcon
              className={`${navConnectStyles.icon} ${
                isOpen ? navConnectStyles.iconOpen : ""
              }`}
              name="arrow_drop_down"
              size={18}
            />
          </button>
        </div>
      </div>

      <div
        aria-hidden={!isOpen}
        className={`${navConnectStyles.dropdown} ${
          isOpen
            ? navConnectStyles.dropdownOpen
            : navConnectStyles.dropdownClosed
        }`}
        inert={!isOpen}
      >
        <div className={navConnectStyles.dropdownContent}>
          <NavConnectDropdown />
        </div>
      </div>
    </section>
  );
}

export default NavConnect;
