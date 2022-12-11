import Link from "next/link";
import { useTheme } from "../../hooks/Theme";
import { SideBar } from "../SideBar";
import { SwitchThemeButton } from "../SwitchThemeButton";

const links = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Dev", href: "/posts" },
  { label: "Sobre mim", href: "/about" },
];

export default function Header() {
  const { theme, switchTheme } = useTheme();
  return (
    <div
      className={`
      flex items-center justify-between
      bg-gray-900 text-white 
      dark:bg-white dark:text-gray-900 dark:border-gray-600 border-b
      h-20 rounded-sm  w-screen`}
    >
      <SideBar items={links} className={`sm:hidden`} />
      <h1 className="ml-5 text-2xl sm:mr-0">Kevin Uehara</h1>
      <nav className="hidden sm:block">
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
      <div className="mr-8">
        <SwitchThemeButton theme={theme} switchTheme={switchTheme} />
      </div>
    </div>
  );
}
