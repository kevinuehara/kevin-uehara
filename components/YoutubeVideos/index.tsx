"use client";

import React from "react";
import YouTube from "react-youtube";
const opts = {
  height: "240",
  width: "400",
};

export const YoutubeVideos = () => {
  return (
    <section
      id="videos"
      className="flex flex-col items-center bg-gray-950  text-white h-full mt-12 w-full"
    >
      <h2 className="text-5xl font-extrabold">Videos</h2>
      <div className="flex flex-col justify-center items-center w-full mt-10">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <YouTube
            videoId="diAtYBfKRuY"
            opts={opts}
            style={{ marginLeft: "40px" }}
          />
          <YouTube
            videoId="qs9iCxIyBcw"
            opts={opts}
            style={{ marginLeft: "40px" }}
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center">
          <YouTube
            videoId="OH4vp1GOfj0"
            opts={opts}
            style={{ marginLeft: "40px" }}
          />
          <YouTube
            videoId="TWN72qhyrbs"
            opts={opts}
            style={{ marginLeft: "40px" }}
          />
        </div>
      </div>
    </section>
  );
};
