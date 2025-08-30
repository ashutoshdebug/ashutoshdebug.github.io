import React, { useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import ProjectCard from "../components/projects/ProjectCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Projects = () => {
  
  const projects = [{
    image1:'/media/projects/nav2.jpg',
    image2:'/media/projects/nav1.jpg',
  },{
    image1:'/media/projects/cheese.jpg',
    image2:'/media/projects/snow.jpg',
  },{
    image1:'/media/projects/cold.jpg',
    image2:'/media/projects/cat.jpg',
  },
];

gsap.registerPlugin(ScrollTrigger);
useGSAP(function(){
  gsap.from('.hero', {
    height: '100px',
    stagger: {
      amount: 0.5
    },
    scrollTrigger:{
      trigger: '.lol',
      // markers:true,
      start: 'top 100%',
      end: 'top -100%',
      scrub: true
    }
  })
})

  return (
    <div className="lg:p-2 p-1">
      <div className=" pt-[40vh]">
        <h2 className=" font-[font2] lg:text-[12.5rem] text-8xl uppercase ">WORK</h2>
      </div>
      <div className="-lg:mt-20 lol">
        {projects.map(function(elem, idx){
          return <div key={idx} className="hero w-full h-[400px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
          <ProjectCard image1 = {elem.image1} image2 = {elem.image2}/>
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
