import Link from "next/link";

export default function Header() {
  return (
    <div className="flex bg-gray-900 text-white h-20 rounded-sm items-center w-screen">
      <h1 className="ml-10 text-2xl">Kevin Uehara</h1>
      <nav className="ml-24">
        <ul className="flex">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/dev" className="ml-4">
              Dev
            </Link>
          </li>
          <li>
            <Link href="/posts" className="ml-4">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
