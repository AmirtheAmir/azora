import type { ComponentType, SVGProps } from "react";
import { Instagram, Soundcloud, Spotify, X } from "../../../../../public/icons";

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socialLinks: SocialLink[] = [
  { label: "X", href: "#", Icon: X },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "SoundCloud", href: "#", Icon: Soundcloud },
  { label: "Spotify", href: "#", Icon: Spotify },
];

export function NavSocials() {
  return (
    <div className="flex items-center gap-lg18">
      {socialLinks.map(({ href, Icon, label }) => (
        <a
          aria-label={label}
          className="inline-flex text-text-secondary transition-colors duration-300 ease-in-out hover:text-text-primary focus-visible:text-text-primary"
          href={href}
          key={label}
        >
          <Icon aria-hidden focusable="false" />
        </a>
      ))}
    </div>
  );
}

export default NavSocials;
