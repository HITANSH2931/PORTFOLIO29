import React from 'react'
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
 import { SiRedux, SiSpringboot } from "react-icons/si";
 import { RiTailwindCssFill } from "react-icons/ri";
 import { FaDocker } from "react-icons/fa";
 import { GrMysql } from "react-icons/gr";
 import Marquee from "react-fast-marquee";



const Skills = () => {

  const techStack = [
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "React", icon: RiReactjsFill },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Docker", icon: FaDocker },
  { name: "MySQL", icon: GrMysql },
];

  return (
    <section id="skills" className='flex flex-col gap-5 mt-40'>

      <div className='flex justify-center mb-10'>

        <div className='flex flex-col items-center gap-2.5'>

        <h1 className=' bg-linear-to-r from-[#1cd8d2] via-[#34afcd] to-[#302b63] bg-clip-text text-transparent text-5xl font-bold'>My Skills</h1>
        <h1 className='text-white text-lg'>Modern Applications | Modern Technologies</h1>
      </div> 

      </div>

    
        <Marquee speed={60} pauseOnHover={true}  >

         {techStack.map((tech, i) => {
         const Icon = tech.icon;
          return (
         <div key={i} className="flex flex-col text-[#0bd0e2] items-center">
         <Icon className="text-5xl mx-20" />
         <span className="text-[16px]  font-semibold mt-2">{tech.name}</span>
         </div>
       );
      })}

        </Marquee>

   
        
    </section>
  )
}

export default Skills
