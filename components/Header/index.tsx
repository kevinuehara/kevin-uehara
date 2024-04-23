import { IoTerminalOutline } from "react-icons/io5";
import { Menu } from "../Menu";

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
    </header>
  );
};
