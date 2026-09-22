import MaterialIcon from "../../ui/MaterialIcon";

export type ConnectDropdownItemData = {
  icon: string;
  label: string;
};

type ConnectDropdownItemProps = ConnectDropdownItemData;

export function ConnectDropdownItem({ icon, label }: ConnectDropdownItemProps) {
  return (
    <button
      className="ma_h4_700 flex cursor-pointer items-center gap-md12 border-0 bg-transparent p-0 text-left text-text-inverse max-[1023px]:ma_h5_700 max-[1023px]:gap-xs6"
      role="menuitem"
      type="button"
    >
      <MaterialIcon
        className="max-[1023px]:!text-[16px]"
        name={icon}
        size={20}
      />
      <span>{label}</span>
    </button>
  );
}

export default ConnectDropdownItem;
