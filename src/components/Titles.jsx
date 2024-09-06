import React from "react";
import ".././App.css";
export const Titles = () => {
  return (
    <div className="text-center flex flex-col gap-12 w-full">
      <div className="relative">
        <video
          className="video opacity-50 top-0 left-0 w-full h-full absolute bg-contain"
          src="./video.mp4"
          autoPlay
          preload="true"
          loop
          muted
        ></video>
        <h1 className="h1 bg-black text-center font-black w-full leading-none mix-blend-multiply">
          DAISY <br /> FIRE
        </h1>
      </div>
      <h2 className="text-3xl font-semibold uppercase">
        Todas las funcionalidades en una aplicacion
      </h2>
    </div>
  );
};
