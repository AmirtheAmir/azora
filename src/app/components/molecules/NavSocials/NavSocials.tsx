import type { ComponentType, SVGProps } from "react";
import { Instagram, Soundcloud, Spotify, X } from "../../../../../public/icons";
import { navSocialsStyles } from "./styles";

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
    <div className={navSocialsStyles.root}>
      {socialLinks.map(({ href, Icon, label }) => (
        <a
          aria-label={label}
          className={navSocialsStyles.link}
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
