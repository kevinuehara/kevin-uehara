import Link from "next/link";
import { useState } from "react";
import { HamburguerIcon } from "../icons";

interface SideBarProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export const SideBar = ({ items, className }: SideBarProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={className}>
      <div
        className={`cursor-pointer ml-7`}
        onClick={() => setIsActive(!isActive)}
      >
        <HamburguerIcon />
      </div>

      <aside
        className={`top-18  w-[50vw] h-full bg-gray-900 dark:bg-white z-40 fixed ease-in-out duration-300 ${
          isActive ? "left-0" : "-left-80"
        } 
          `}
      >
        <div className="mt-5">
          <ul className="flex flex-col">
            {items.map(({ label, href = "" }) => (
              <li
                key={label}
                className="p-3 pl-10 w-full hover:bg-gray-500 cursor-pointer dark:hover:bg-gray-900 dark:hover:text-white"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};
