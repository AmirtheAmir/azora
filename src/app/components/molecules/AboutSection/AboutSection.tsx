import Image from "next/image";
import BlueBackgroundText from "../../atoms/BlueBackgroundText";
import MetallicPaint from "../../atoms/MetallicPaint";
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
        <MetallicPaint
          angle={115}
          ariaLabel="Azora metallic emblem"
          blur={0.058}
          brightness={2}
          chromaticSpread={2}
          className={aboutSectionStyles.logo}
          contour={0.15}
          contrast={0.5}
          darkColor="#000000"
          distortion={1}
          effectPlacement="outside"
          fresnel={1}
          hollowShape
          imageSrc="/images/metalic.svg"
          lightColor="#ffffff"
          liquid={0.71}
          mouseAnimation={false}
          noiseScale={0.5}
          patternSharpness={0.7}
          refraction={0.01}
          scale={4}
          seed={20.72}
          sourceMask="transparent-cutout"
          speed={0.3}
          tintColor="#92A8FC"
          waveAmplitude={0.4}
        />

        <div className={aboutSectionStyles.copy}>
          <div className={aboutSectionStyles.introduction}>
            <h2 className={aboutSectionStyles.title} id="music-origin-title">
              [Music Origin]
            </h2>
            <p className={aboutSectionStyles.description}>
              <span className={aboutSectionStyles.emphasis}>AZORA</span> was
              born from the space between contrasts, organic and electronic,
              aggression and calm, darkness and light. The name was chosen for
              its ambiguity; it belongs to no single place, sound, or meaning.
            </p>
          </div>

          <p className={aboutSectionStyles.description}>
            <span className={aboutSectionStyles.emphasis}>Behind</span> azora is{" "}
            <BlueBackgroundText>Axel Manning</BlueBackgroundText> a
            <span className={aboutSectionStyles.emphasis}>
              {" "}
              Brisbane-based artist
            </span>{" "}
            building a world entirely his own.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
