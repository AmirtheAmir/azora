import { songs } from "../../../data/songs";
import MenuSong from "../../atoms/MenuSong";
import NavSectionTitle from "../../atoms/NavSectionTitle";
import { navSongsStyles } from "./styles";

export function NavSongs() {
  return (
    <section className={navSongsStyles.root} aria-label="Discography">
      <NavSectionTitle>[Discography]</NavSectionTitle>
      <div className={navSongsStyles.list}>
        {songs.map((song) => (
          <MenuSong
            image={song.image}
            key={song.name}
            name={song.name}
            year={song.year}
          />
        ))}
      </div>
    </section>
  );
}

export default NavSongs;
