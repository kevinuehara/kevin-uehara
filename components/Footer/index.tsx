import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-950 text-white h-full mt-12">
      <hr className="bg-gray-100 w-full" />
      <div className="flex md:flex-row flex-col p-4 mb-3 items-center justify-center">
        <span className="text-lg text-gray-300">
          Designed and Developed by Kevin Uehara
        </span>
        <span className="ml-10">©2025 Kevin Uehara</span>
      </div>
    </footer>
  );
};
