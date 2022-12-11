import Link from "next/link";
import { GitHubIcon, LinkedinIcon } from "../icons";

export const Footer = () => {
  return (
    <div className="w-screen fixed bottom-0 h-10 sm:h:12 bg-gray-900 dark:bg-white dark:border-t">
      <div className="flex justify-center items-center h-full text-white dark:text-gray-900">
        <Link href="https://github.com/kevinuehara">
          <div className="flex ml-2">
            <GitHubIcon />
            <span className="ml-2">Gihub</span>
          </div>
        </Link>

        <Link href="https://www.linkedin.com/in/kevin-uehara/">
          <div className="flex ml-4">
            <LinkedinIcon />
            <span className="ml-2">Linkedin</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
