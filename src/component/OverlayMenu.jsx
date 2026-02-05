import React from 'react'
import { FiX } from "react-icons/fi";

const OverlayMenu = ({setMenuOpen}) => {
  return (
    <div className='fixed inset-0 z-50 backdrop-blur-sm bg-black/90 '>

       <div onClick={() => setMenuOpen(false)} className='flex justify-end pt-5 pr-5 text-white text-2xl'>
          <FiX/>
       </div>

       <div className='flex justify-center items-center h-screen'>
       
      <ul className='text-white flex flex-col gap-4.5 text-2xl font-semibold'>
         <li>
         <a href="#home" className='hover:text-pink-600' onClick={() => setMenuOpen(false)}>Home</a>
         </li>
         <li>
         <a href="#about" className='hover:text-pink-600' onClick={() => setMenuOpen(false)}>About</a>
         </li>
         <li>
         <a href="#skills" className='hover:text-pink-600' onClick={() => setMenuOpen(false)}>Skills</a>
         </li>
         <li>
         <a href="#projects" className='hover:text-pink-600' onClick={() => setMenuOpen(false)}>Projects</a>
         </li>
         <li>
         <a href="#contact" className='hover:text-pink-600' onClick={() => setMenuOpen(false)} >Contact</a>
         </li>
      </ul>

        </div>  
    </div>
  )
}

export default OverlayMenu
