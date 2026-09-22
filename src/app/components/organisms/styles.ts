export const navigationStyles = {
  root:
    "box-border flex h-dvh w-[296px] shrink-0 scroll-smooth flex-col gap-xl30 overflow-y-auto border-r-2 border-border-primary bg-background-primary py-xl24 text-text-primary [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&_*]:box-border max-[1023px]:w-[270px] max-[1023px]:gap-xl24 max-[1023px]:py-lg18 max-[863px]:fixed max-[863px]:inset-x-0 max-[863px]:bottom-0 max-[863px]:z-40 max-[863px]:w-full max-[863px]:gap-xl24 max-[863px]:overflow-y-auto max-[863px]:border-r-0 max-[863px]:border-t-2 max-[863px]:py-0 max-[863px]:pb-xs6 max-[863px]:transition-[height] max-[863px]:duration-200",
  open: "max-[863px]:h-dvh",
  closed: "max-[863px]:h-[92px]",
  primary: "flex flex-col gap-xl30 max-[1023px]:gap-xl24",
  visibleContent: "contents",
  hiddenContent: "contents max-[863px]:hidden",
} as const;
