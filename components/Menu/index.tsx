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
    <div className="flex justify-between w-full mt-7">
      <div className="border p-3 rounded-3xl bg-black flex justify-around shadow-md shadow-gray-500 invisible md:visible">
        <ItemMenu label="Home" href="#home" active />
        <ItemMenu label="Work" href="#work" />
        <ItemMenu label="Videos" href="#videos" />
        <ItemMenu label="Events" href="#events" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full w-14 h-14 md:invisible visible mt-7 mr-2 bg-slate-600"
          >
            <GiHamburgerMenu className="w-14 h-14" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <a href="#home">Home</a>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <a href="#work">Work</a>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <a href="#videos">Videos</a>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <a href="#events">Events</a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
