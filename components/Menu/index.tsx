import { ItemMenu } from "./ItemMenu";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Menu = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="border p-2 rounded-3xl bg-black flex justify-around shadow-md shadow-gray-500 invisible md:visible">
        <ItemMenu label="Home" active />
        <ItemMenu label="Work" />
        <ItemMenu label="Events" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full w-14 h-14 md:invisible visible mt-5"
          >
            <GiHamburgerMenu className="w-14 h-14" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">Home</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Work</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Events
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
