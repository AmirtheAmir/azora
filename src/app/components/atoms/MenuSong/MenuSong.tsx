import type { CSSProperties } from "react";
import type { Song } from "../../../data/songs";
import styles from "./MenuSong.module.css";
import { menuSongStyles } from "./styles";

type MenuSongProps = Song;

type SongStyle = CSSProperties & {
  "--song-image": string;
};

const MARQUEE_REPETITIONS = 8;

export function MenuSong({ name, year, image }: MenuSongProps) {
  const style: SongStyle = {
    "--song-image": `url(${image})`,
  };

  return (
    <button className={styles.item} style={style} type="button">
      <span className={styles.defaultContent}>
        <span className={`${menuSongStyles.nameTypography} ${styles.name}`}>
          {name}
        </span>
        <span className={`${menuSongStyles.yearTypography} ${styles.year}`}>
          {year}
        </span>
        <span aria-hidden className={styles.defaultSpacer} />
      </span>

      <span aria-hidden className={styles.marquee}>
        <span className={styles.marqueeTrack}>
          {Array.from({ length: MARQUEE_REPETITIONS }).map((_, index) => (
            <span className={styles.marqueePart} key={index}>
              <span className={styles.marqueeText}>{name}</span>
              <span className={styles.art} />
            </span>
          ))}
        </span>
      </span>
    </button>
  );
}

export default MenuSong;
