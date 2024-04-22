import { IoTerminalOutline } from "react-icons/io5";
import { Menu } from "../Menu";

export const Header = () => {
  return (
    <header className="h-14 absolute text-white md:p-12 p-5 flex w-full">
      <div className="flex items-center w-2/3">
        <IoTerminalOutline className="text-3xl text-purple-600" />
        <h1 className="text-3xl ml-5">Kevin Uehara</h1>
      </div>

      <div className="flex items-center justify-start w-full">
        <Menu />
      </div>
    </header>
  );
};
