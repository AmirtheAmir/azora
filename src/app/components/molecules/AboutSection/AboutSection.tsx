import Image from "next/image";
import BlueBackgroundText from "../../atoms/BlueBackgroundText";
import { aboutSectionStyles } from "./styles";

export function AboutSection() {
  return (
    <section
      className={aboutSectionStyles.root}
      aria-labelledby="music-origin-title"
    >
      <div className={aboutSectionStyles.portraitWrapper}>
        <Image
          fill
          alt="Close-up portrait of Axel Manning"
          className={aboutSectionStyles.portrait}
          sizes="(max-width: 659px) calc(100vw - 18px), (max-width: 863px) calc(100vw - 242px), (max-width: 1024px) calc(100vw - 290px), calc(100vw - 320px)"
          src="/images/axel_closeup.png"
        />
      </div>

      <div className={aboutSectionStyles.origin}>
        <Image
          alt="Azora metallic emblem"
          className={aboutSectionStyles.logo}
          height={296}
          src="/images/metalic.svg"
          width={296}
        />

        <div className={aboutSectionStyles.copy}>
          <div className={aboutSectionStyles.introduction}>
            <h2 className={aboutSectionStyles.title} id="music-origin-title">
              [Music Origin]
            </h2>
            <p className={aboutSectionStyles.description}>
              <strong className={aboutSectionStyles.emphasis}>AZORA</strong> was
              born from the space between contrasts, organic and electronic,
              aggression and calm, darkness and light. The name was chosen for
              its ambiguity; it belongs to no single place, sound, or meaning.
            </p>
          </div>

          <p className={aboutSectionStyles.description}>
            <strong className={aboutSectionStyles.emphasis}>Behind</strong> azora
            is <BlueBackgroundText>Axel Manning</BlueBackgroundText> a
            <strong className={aboutSectionStyles.emphasis}>
              {" "}
              Brisbane-based artist
            </strong>{" "}
            building a world entirely his own.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
