import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-950 text-white h-full mt-12">
      <hr className="bg-gray-100 w-full" />
      <div className="flex md:flex-row flex-col mt-5 w-full p-2 items-center justify-between">
        <span className="text-lg text-gray-300">
          Designed and Developed by Kevin Uehara
          <span className="ml-10">©2024 Kevin Uehara</span>
        </span>

        <div className="mr-2">
          <a
            className="mr-2 text-lg hover:text-purple-600"
            href="https://www.youtube.com/@ueharakevin/"
            target="_blank"
          >
            Youtube
          </a>
          <a
            className="mr-2 text-lg hover:text-purple-600"
            href="https://dev.to/kevin-uehara"
            target="_blank"
          >
            Dev.To
          </a>
          <a
            className="mr-2 text-lg hover:text-purple-600"
            href="https://www.instagram.com/uehara_kevin/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="mr-2 text-lg hover:text-purple-600"
            href="https://twitter.com/ueharaDev"
            target="_blank"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
