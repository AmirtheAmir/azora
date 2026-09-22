import { songs } from "../../../data/songs";
import MenuSong from "../../atoms/MenuSong/MenuSong";
import NavSectionTitle from "../../atoms/NavSectionTitle/NavSectionTitle";

export function NavSongs() {
  return (
    <section
      className="flex flex-col gap-3xs2"
      aria-label="Discography"
    >
      <NavSectionTitle>[Discography]</NavSectionTitle>
      <div className="flex flex-col gap-3xs2 pb-xs6">
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
