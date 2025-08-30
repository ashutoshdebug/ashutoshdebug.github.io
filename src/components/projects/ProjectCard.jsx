import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="relative group lg:w-1/2 h-full bg-green-900 rounded-none hover:rounded-[50px] overflow-hidden transition-all  ">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className=" opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 bg-black/10 h-full w-full flex items-center justify-center">
          <h2 className="font-[font1] uppercase text-6xl border-2 rounded-full pt-2 text-white border-white px-4 ">
            View Project
          </h2>
        </div>
      </div>
      
      <div className="relative group lg:w-1/2 h-full bg-green-900 rounded-none hover:rounded-[50px] overflow-hidden transition-all  ">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className=" opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 bg-black/10 h-full w-full flex items-center justify-center">
          <h2 className="font-[font1] uppercase text-6xl border-2 rounded-full pt-2 text-white border-white px-4 ">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
