"use client";

import { ItemMenu } from "./ItemMenu";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTwitter, FaDev, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between w-full mt-7">
      <div className="border p-3 rounded-3xl bg-black flex justify-around shadow-md shadow-gray-500 invisible md:visible">
        <ItemMenu label="Home" href="#home" />
        <ItemMenu label="Work" href="#work" />
        <ItemMenu label="Videos" href="#videos" />
        <ItemMenu label="Events" href="#events" />
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="rounded-full w-14 h-14 md:invisible visible mt-2 mr-2 bg-slate-600"
      >
        <GiHamburgerMenu className="w-14 h-14" />
      </Button>

      {isOpen && (
        <div className="absolute top-20 left-0 z-10 rounded-md">
          <div className="w-screen h-72 flex flex-col bg-black text-white rounded-md">
            <a
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-extrabold m-3 cursor-pointer hover:text-purple-600"
              href="#home"
            >
              Home
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-extrabold m-3 cursor-pointer hover:text-purple-600"
              href="#work"
            >
              Work
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-extrabold m-3 cursor-pointer hover:text-purple-600"
              href="#videos"
            >
              Videos
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl font-extrabold m-3 cursor-pointer hover:text-purple-600"
              href="#events"
            >
              Events
            </a>
            <hr className="bg-gray-400 w-full" />
            <div className="flex m-3">
              <a
                className="m-2"
                href="https://www.youtube.com/@ueharakevin/"
                target="_blank"
              >
                <FaYoutube className="w-8 h-8 text-purple-600" />
              </a>
              <a
                className="m-2"
                href="https://dev.to/kevin-uehara"
                target="_blank"
              >
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
        </div>
      )}
    </div>
  );
};
