import { songs } from "../../../data/songs";
import AboutButton from "../../atoms/AboutButton";
import ListenButton from "../../atoms/ListenButton";
import { latestReleaseSectionStyles } from "./styles";

const latestRelease = songs[0];

export function LatestReleaseSection() {
  return (
    <section
      className={latestReleaseSectionStyles.root}
      aria-labelledby="latest-release-title"
    >
      <div className={latestReleaseSectionStyles.heading}>
        <span className={latestReleaseSectionStyles.subtitle}>
          [Latest Release]
        </span>
        <h1
          className={latestReleaseSectionStyles.title}
          id="latest-release-title"
        >
          {latestRelease.name}
        </h1>
      </div>

      <div className={latestReleaseSectionStyles.actions}>
        <ListenButton />
        <AboutButton />
      </div>
    </section>
  );
}

export default LatestReleaseSection;
