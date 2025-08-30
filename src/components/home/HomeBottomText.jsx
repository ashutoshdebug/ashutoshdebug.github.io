import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-2">
      <p className="absolute lg:w-[25vw] w-72 lg:right-10 right-0 bottom-40 lg:bottom-26 font-[font1] lg:text-sm text-base lg:leading-relaxed leading-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ashutosh builds ideas into experiences—whether through code, design, or data. He believes the best breakthroughs happen outside the comfort zone, where curiosity meets persistence. Every project, from sleek web interactions to machine learning models, is driven by honesty, exploration, and a commitment to keep pushing forward. When he believes in something, he’s all in.</p>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-20 flex items-center px-6 pt-2 lg:pt-4 lg:px-14 lg:pb-8 pb-1 border-white rounded-full uppercase">
        <Link className="text-[6vw] lg:mt-6" to="/projects">
          Projects
        </Link>
      </div>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-20 flex items-center px-6 pt-2 lg:pt-4 lg:px-14 lg:pb-8 pb-1 border-white rounded-full uppercase">
        <Link className="text-[6vw] lg:mt-6" to="/agence">
        About Me
      </Link>
      </div>
      
    </div>
  );
};

export default HomeBottomText;
