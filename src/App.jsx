import React, { useState, useEffect } from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <div className="w-screen h-screen text-white selection:bg-orange-500">
      <div className="h-full flex flex-col justify-center items-center gap-10">
        <div className="text-6xl text-center">CURRENTLY BUSY LEVELING UP ACADEMICALLY!</div>
        <div className="flex justify-center flex-col items-center">
          <div className="text-2xl">Portfolio will be live in:</div>
          <CountdownTimer />
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-row justify-start items-center gap-1">
            <div className="text-white text-xl">
              Watch my work over here:&nbsp;
            </div>
            <div>
              <a href="https://github.com/ashutoshdebug" target="_blank">
                <div className="text-white hover:text-gray-300 duration-300 underline text-xl">
                  @Github
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-1">
            <div className="text-white text-xl">Connect to me on:&nbsp;</div>
            <div>
              <a href="https://linkedin.com/in/ashutosht05" target="_blank">
                <div className="text-white hover:text-gray-300 duration-300 underline text-xl">
                  @LinkedIn
                </div>
              </a>
            </div>
            <div>
              <a href="mailto:ashutoshkumart82@gmail.com">
                <div className="text-white hover:text-gray-300 duration-300 underline text-xl">
                  @Mail
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
