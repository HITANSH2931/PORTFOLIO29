import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import Hitansh from "../assets/Hitansh.png"
import OverlayMenu from './OverlayMenu';

const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className='flex  justify-around items-center pt-4'>

        <div className='flex items-center gap-2.5'>
            <img src={Hitansh} className='bg-white w-12 h-12'/>
            <div className='font-bold text-white text-2xl hidden sm:block'>Hitansh</div>
        </div>

        <FaBars onClick={() => setMenuOpen(true)} className='text-white' size={24}/>

       <a href="#contact"><button className='rounded-full px-3.5 py-2 text-white bg-linear-to-r from-pink-500 to-blue-500'>Reach Out</button></a>
        
        {menuOpen && <OverlayMenu setMenuOpen={setMenuOpen}/>}
      
    </div>
  )
}

export default Navbar
