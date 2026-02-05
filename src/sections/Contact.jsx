import React from 'react'
import Astra from "../assets/Astra.png"
import Form from './Form'

const Contact = () => {
  return (
    <section id="contact" className='mt-30'>
       
       <div className='grid grid-cols-1  md:grid-cols-2 gap-5 md:mx-20'>

        <img src={Astra} className='w-[500px] h-[500px]'/>

        <Form/>

       </div>
       
    </section>
  )
}

export default Contact
