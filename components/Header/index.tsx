import { IoTerminalOutline } from "react-icons/io5";
import { Menu } from "../Menu";
import {
  FaDev,
  FaSquareInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="h-14 text-white md:p-12 p-5 flex">
      <div className="flex items-center md:w-1/2 mt-5 ">
        <IoTerminalOutline className="text-3xl text-purple-600 w-12 h-12" />
        <h1 className="text-3xl absolute ml-20">Kevin Uehara</h1>
      </div>

      <div className="flex items-center justify-start w-full">
        <Menu />
      </div>

      <div className=" hidden md:hidden">
        <div className="flex">
          <a
            className="m-2"
            href="https://www.youtube.com/@ueharakevin/"
            target="_blank"
          >
            <FaYoutube className="w-8 h-8 text-purple-600" />
          </a>
          <a className="m-2" href="https://dev.to/kevin-uehara" target="_blank">
            <FaDev className="w-8 h-8 text-purple-600" />
          </a>
          <a
            className="m-2"
            href="https://www.instagram.com/uehara_kevin/"
            target="_blank"
          >
            <FaSquareInstagram className="w-8 h-8 text-purple-600" />
          </a>
          <a
            className="m-2"
            href="https://twitter.com/ueharaDev"
            target="_blank"
          >
            <FaTwitter className="w-8 h-8 text-purple-600" />
          </a>
        </div>
      </div>
    </header>
  );
};
