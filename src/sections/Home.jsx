import React from 'react'
import TypeWriter from '../TypeWriter'
import avator from "../assets/avator.png"
import BackgroundParticles from '../component/BackgroundParticles'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Home = () => {
  return (
   <section id='home' className='bg-black z-0 relative mt-20'>

    <BackgroundParticles/>
    
    <div className='absolute  animate-[fadeGlow_2s_ease-in-out_infinite] -z-10 -top-38 -left-34  delay-100 rounded-full w-[40vw] h-[20vw] bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] blur-3xl opacity-30'></div>

    <div className='absolute animate-[fadeGlow_2s_ease-in-out_infinite] -z-10 top-0 right-52 delay-500 rounded-full w-[20vw] h-[38vw] bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] blur-3xl opacity-30'></div>

      <div className='grid grid-cols-1 mx-10 md:grid-cols-2 sm:mx-40 gap-40'>

        <div className='flex flex-col gap-8'>
            <TypeWriter/>
             <div className='flex flex-col gap-3'>
            <div className='text-7xl font-bold bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent'>Hello, I'm</div>
            <div className='text-7xl font-bold text-white'>Hitansh Joshi</div>
            </div>

            <p className='text-white text-[16px]'>I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.</p>
            
            <div className='flex gap-2.5  items-center'>
            <a href="#projects"><button className='text-lg rounded-full font-semibold bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] text-white px-5.5 py-3'>View my work</button></a>
            <button className='text-lg rounded-full font-semibold bg-white text-black px-5.5 py-3'>My Resume</button>
            </div>

             <div className="flex items-center pl-3  gap-9 text-3xl text-white mt-3.5">
            <a href="https://www.linkedin.com/in/hitansh-joshi-3118682a9/" target="_blank">
             <FaLinkedinIn />
            </a>

             <a href="https://www.instagram.com/_hitansh_09/" target="_blank">
             <FaInstagram />
             </a>

             <a href="https://github.com/HITANSH2931/" target="_blank">
             <FaGithub />
             </a>

             <a href="https://leetcode.com/u/hitanshjoshi2931/" target="_blank">
             <SiLeetcode />
            </a>
            </div>


        </div>

        <div>

          <img src={avator} className='h-[600px] -mt-20'/>

        </div>

      </div>


    
   </section>
  )
}

export default Home
