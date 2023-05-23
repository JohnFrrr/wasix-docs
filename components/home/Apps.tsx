import React, { useCallback } from "react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

import BashLogo from "./apps/BashLogo";
import BytesLogo from "./apps/BytesLogo";
import CurlLogo from "./apps/CurlLogo";
import HyperLogo from "./apps/HyperLogo";
import LeptosLogo from "./apps/LeptosLogo";
import MioLogo from "./apps/MioLogo";
import PythonLogo from "./apps/PythonLogo";
import RspackLogo from "./apps/RsPackLogo";
import SerdeLogo from "./apps/SerdeLogo";
import TantivyLego from "./apps/TantivyLogo";
import TokioLogo from "./apps/TokioLogo";
import TowerLogo from "./apps/TowerLogo";
import TracingLogo from "./apps/TracingLogo";
import { shuffleArray } from "../utils";
const actions = [];

const availableApps = [
  BashLogo,
  BytesLogo,
  CurlLogo,
  HyperLogo,
  LeptosLogo,
  MioLogo,
  PythonLogo,
  RspackLogo,
  SerdeLogo,
  TantivyLego,
  TokioLogo,
  TowerLogo,
  TracingLogo,
];
export default function Apps() {
  const { resolvedTheme } = useTheme();

  const randomMarquees = useCallback(() => {
    const range = Array.from({ length: availableApps.length }, (x, i) => i);
    const marquees = [];
    for (let i = 0; i < 5; i++) {
      const marquee = [];
      const shuffledArray = shuffleArray(range);
      for (const num of shuffledArray) {
        marquee.push(availableApps[num]);
      }
      marquees.push(marquee);
    }

    return (
      <>
        {marquees.map((marquee, marqueeIdx) => (
          <Marquee
            key={`marquee-${marqueeIdx}`}
            className="flex flex-row py-2 my-1 overflow-hidden"
            gradient={true}
            gradientWidth={50}
            gradientColor={
              resolvedTheme === "dark" ? [17, 17, 17] : [255, 255, 255]
            }
            direction={(marqueeIdx & 1) === 0 ? "right" : "left"}
            speed={20}
            pauseOnHover={false}
            pauseOnClick={false}
            delay={0}
          >
            {marquee.map((App, appIdx) => (
              <div className="mx-4" key={`marquee-${marqueeIdx}-app-${appIdx}`}>
                <App />
              </div>
            ))}
          </Marquee>
        ))}
      </>
    );
  }, [resolvedTheme]);
  return (
    <div className="h-[100lvh]">
      <h2 className="text-7xl font-bold font-sans my-12 ml-4 sm:ml-0 text-black dark:text-white">
        Just Works in WASIX
      </h2>
      <div className="flex flex-col mx-4 rounded-md relative">
        {randomMarquees()}
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-2xl backdrop-filter backdrop-blur-xl bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 z-10 px-16 py-28">
          <span className="text-black dark:text-white text-5xl whitespace-nowrap">
            All the apps you love ♥️
          </span>
        </div>
      </div>
    </div>
  );
}
