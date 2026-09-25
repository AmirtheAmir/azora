export const aboutSectionStyles = {
  root: `
    flex
    flex-col
    gap-[194px]
  `,
  portraitWrapper: `
    relative
    h-[476px]
    w-full
    overflow-hidden
    border-2
    border-border-primary

    max-[659px]:h-[284px]
  `,
  portrait: `
    object-cover
    object-center
  `,
  origin: `
    flex
    items-start
    gap-lg18

    max-[863px]:gap-md12

    max-[659px]:flex-col
  `,
  logo: `
    h-[296px]
    w-[296px]
    shrink-0

    max-[863px]:h-[192px]
    max-[863px]:w-[192px]
  `,
  copy: `
    flex
    min-w-0
    flex-col
    gap-md12
  `,
  introduction: `
    flex
    flex-col
    gap-2xs4
  `,
  title: `
    ma_h4_700
    text-text-tertiary

    max-[863px]:!text-[13.3px]
    max-[863px]:!leading-[1.38]
  `,
  description: `
    ma_body_h2_700
    text-text-secondary

    max-[863px]:!text-[19.2px]
    max-[863px]:!leading-[1.5]
  `,
  emphasis: `
    font-bold
    text-text-primary
  `,
} as const;
