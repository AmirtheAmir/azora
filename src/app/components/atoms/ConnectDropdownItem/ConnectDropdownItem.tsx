import MaterialIcon from "../../ui/MaterialIcon";
import { connectDropdownItemStyles } from "./styles";

export type ConnectDropdownItemData = {
  icon: string;
  label: string;
};

type ConnectDropdownItemProps = ConnectDropdownItemData;

export function ConnectDropdownItem({ icon, label }: ConnectDropdownItemProps) {
  return (
    <button
      className={connectDropdownItemStyles.button}
      type="button"
    >
      <MaterialIcon
        className={connectDropdownItemStyles.icon}
        name={icon}
        size={20}
      />
      <span>{label}</span>
    </button>
  );
}

export default ConnectDropdownItem;
