import { Fragment, type ComponentType, type SVGProps } from "react";
import { Instagram, Soundcloud, Spotify, X } from "../../../../../public/icons";
import { navSocialsStyles } from "./styles";

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "X", href: "#", Icon: X },
  { label: "Spotify", href: "#", Icon: Spotify },
  { label: "SoundCloud", href: "#", Icon: Soundcloud },
];

export function NavSocials() {
  return (
    <div className={navSocialsStyles.root}>
      {socialLinks.map(({ href, Icon, label }, index) => (
        <Fragment key={label}>
          {index > 0 ? (
            <span aria-hidden className={navSocialsStyles.divider} />
          ) : null}
          <a
            aria-label={label}
            className={navSocialsStyles.link}
            href={href}
          >
            <Icon
              aria-hidden
              className={navSocialsStyles.icon}
              focusable="false"
            />
          </a>
        </Fragment>
      ))}
    </div>
  );
}

export default NavSocials;
