import MaterialIcon from "../../ui/MaterialIcon";
import { aboutButtonStyles } from "./styles";

export function AboutButton() {
  return (
    <button className={aboutButtonStyles.root} type="button">
      <span>About</span>
      <span className={aboutButtonStyles.iconWrapper}>
        <MaterialIcon
          className={aboutButtonStyles.icon}
          name="north_east"
          size={18}
        />
      </span>
    </button>
  );
}

export default AboutButton;
