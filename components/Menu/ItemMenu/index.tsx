interface ItemMenuProps {
  label: string;
  href?: string;
  active?: boolean;
}

export const ItemMenu = ({ label, href, active }: ItemMenuProps) => {
  return (
    <a
      href={href}
      className={`border p-1 m-2 w-24 items-center transition delay-100 justify-center flex  rounded-3xl cursor-pointer border-purple-600 hover:bg-purple-600`}
    >
      {label}
    </a>
  );
};
