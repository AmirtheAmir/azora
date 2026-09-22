"use client";

import { useEffect, useState } from "react";
import { navBrisbaneTimeStyles } from "./styles";

function formatBrisbaneTime() {
  return new Intl.DateTimeFormat("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Australia/Brisbane",
  }).format(new Date());
}

export function NavBrisbaneTime() {
  const [brisbaneTime, setBrisbaneTime] = useState("--:--");

  useEffect(() => {
    const initialTimer = window.setTimeout(() => {
      setBrisbaneTime(formatBrisbaneTime());
    }, 0);
    const timer = window.setInterval(() => {
      setBrisbaneTime(formatBrisbaneTime());
    }, 60000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className={navBrisbaneTimeStyles.container}>
      <span className={navBrisbaneTimeStyles.location}>Brisbane (AU)</span>
      <time dateTime={brisbaneTime}>{brisbaneTime}</time>
    </div>
  );
}

export default NavBrisbaneTime;
