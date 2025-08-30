import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 lg:mt-0 mt-[54vw] text-center">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center">
        The spark for
        </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-start justify-center">
        Build
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center">creatively</div>
    </div>
  );
};

export default HomeHeroText;
