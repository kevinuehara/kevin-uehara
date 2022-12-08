import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Dev", href: "/posts" },
  { label: "Sobre mim", href: "/about" },
];

export default function Header() {
  return (
    <div className="flex bg-gray-900 text-white h-20 rounded-sm items-center w-screen">
      <h1 className="ml-5 text-2xl">Kevin Uehara</h1>
      <nav className="ml-20">
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
