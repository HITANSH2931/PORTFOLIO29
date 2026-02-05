import React from 'react'
import job from "../assets/job.png"
import expense from "../assets/expense.png";
import resume from "../assets/resume.png";
import  emart from "../assets/emart.png";

const Projects = () => {

  const techImages = [
  {
  
    img: job,
    url: "https://job-portal-sand-eight.vercel.app/"
  },
  {
   
    img: resume,
    url: "https://resume-builder-pdld.vercel.app/"
  },
  {
  
    img: expense,
    url: "https://expense-tracker-ten-orpin-76.vercel.app/"
  },
  {
    img: emart,
    url: "https://fhfthhhr.netlify.app/"
  }
];
  return (
    <section id='projects' className=' mt-30'>
         
         <div className='flex justify-center'>
         <div className='text-5xl bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent font-bold'>Projects</div>
         </div>

         <div className='grid  grid-cols-1 lg:grid-cols-2  sm:mx-20 mt-20 gap-x-3.5 gap-y-10'>

         {techImages.map((tech,i) =>(

             <div className='flex flex-col gap-4.5'>

              <img src={tech.img} className='sm:w-[600px] sm:h-[300px] rounded-lg'/>
              
           <a href={tech.url} target='_blank' className='ml-4 font-bold text-lg text-white  hover:scale-105 transition underline'>View Project</a>

             </div>
         ))}

         </div>

     </section>
  )
}

export default Projects
