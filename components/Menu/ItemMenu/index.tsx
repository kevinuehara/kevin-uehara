interface ItemMenuProps {
  label: string;
  href?: string;
  active?: boolean;
}

export const ItemMenu = ({ label, href, active }: ItemMenuProps) => {
  return (
    <div
      className={`border p-3 w-28 items-center transition delay-100 justify-center flex  rounded-3xl cursor-pointer border-purple-600 hover:bg-purple-600 ${
        active ? "bg-purple-700 " : "bg-black"
      }`}
    >
      {label}
    </div>
  );
};
