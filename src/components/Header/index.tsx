import Link from "next/link";
import { SideBar } from "../SideBar";

const links = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Dev", href: "/posts" },
  { label: "Sobre mim", href: "/about" },
];

export default function Header() {
  return (
    <div
      className={`
      flex items-center  sm:justify-start
      bg-gray-900 text-white 
      h-20 rounded-sm  w-screen`}
    >
      <SideBar items={links} className={`sm:hidden`} />
      <h1 className="ml-5 text-2xl sm:mr-0">Kevin Uehara</h1>
      <nav className="ml-20 hidden sm:block">
        <ul className="flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="ml-7">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
