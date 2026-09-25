import { Soundcloud, Spotify } from "../../../../../public/icons";
import { listenButtonStyles } from "./styles";

export function ListenButton() {
  return (
    <button className={listenButtonStyles.root} type="button">
      <span className={listenButtonStyles.label}>Listen On</span>
      <span aria-hidden className={listenButtonStyles.platforms}>
        <span className={listenButtonStyles.platform}>
          <Spotify className={listenButtonStyles.icon} focusable="false" />
        </span>
        <span className={listenButtonStyles.platform}>
          <Soundcloud className={listenButtonStyles.icon} focusable="false" />
        </span>
      </span>
    </button>
  );
}

export default ListenButton;
