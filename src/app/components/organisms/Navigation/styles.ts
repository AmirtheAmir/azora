import styles from "./Navigation.module.css";

export const navigationStyles = {
  root: styles.root,
  open: styles.open,
  closed: styles.closed,
  primary: styles.primary,
  visibleContent: styles.visibleContent,
  hiddenContent: styles.hiddenContent,
} as const;
