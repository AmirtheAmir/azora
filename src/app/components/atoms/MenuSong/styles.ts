export const menuSongStyles = {
  button: `
    relative
    w-full
    cursor-pointer
    overflow-hidden
    border-0
    bg-transparent
    px-xl24
    py-2xs4
    text-left
    text-text-primary

    max-[1024px]:px-lg18
  `,
  defaultContent: `
    flex
    min-w-0
    items-center
    gap-xs6

    max-[1024px]:gap-2xs4
  `,
  name: `
    ma_h3_700
    relative
    z-[1]

    max-[1024px]:!text-[16px]
    max-[1024px]:!leading-[1.24]
  `,
  year: `
    ma_h5_700
    relative
    pt-1
    z-[1]
    self-start
    text-text-secondary

    max-[863px]:!text-[11.1px]
    max-[863px]:!leading-[1.22]
  `,
  defaultSpacer: `
    block
    h-[40px]
    w-xs6
    flex-none
    bg-transparent

    max-[863px]:h-[34px]
  `,
} as const;
