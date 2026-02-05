import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className='flex justify-center py-30'>

      <div className='flex flex-col gap-6'>
        <h1 className='text-white font-bold text-5xl text-center'>Hitansh Joshi</h1>
        <div className='h-1 bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] rounded-lg'></div>
          <div className="flex items-center pl-3  gap-9 text-3xl text-white mt-3.5 mx-auto">
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

       <span className='text-gray-200 text-[13px] italic mx-auto'>"Success is when preparation meets opportunity"</span>
       <span className='text-gray-400 text-[12px] mx-auto'>© 2026 Hitansh Joshi. All rights reserved.</span>
        
      </div>

     
    </div>
  )
}

export default Footer
