import {
  navActionBase,
  navActionTextStates,
  navTransition300,
} from "../../styles";

export const navConnectStyles = {
  root: `flex flex-col border-y-2 border-border-primary pt-3xl48 transition-[padding] ${navTransition300}`,
  openPadding: "pb-0",
  closedPadding: "pb-3xl48",
  content: "relative flex flex-col gap-2xs4",
  button: `${navActionBase} ${navActionTextStates} items-center justify-between hover:bg-background-inverse focus-visible:bg-background-inverse`,
  buttonOpen: "bg-background-inverse text-text-inverse",
  buttonClosed: "bg-transparent text-text-primary",
  icon: `transition-transform ${navTransition300} max-[863px]:!text-[14px]`,
  iconOpen: "rotate-180",
  dropdown: `grid transition-[grid-template-rows,opacity] ${navTransition300}`,
  dropdownOpen: "grid-rows-[1fr] opacity-100",
  dropdownClosed: "grid-rows-[0fr] opacity-0",
  dropdownContent: "overflow-hidden",
} as const;
