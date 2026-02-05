import React from 'react'
import image from "../assets/image.png"

const About = () => {
  return (
    <section id="about" className='mx-5 md:mx-20 lg:mx-40 mt-60'>

      <div className='flex items-center flex-wrap md:flex-nowrap gap-8'>

      <img src={image} className='w-lg h-72 rounded-lg bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'/>
        <div className='flex flex-col gap-5'>
          <h1 className='bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent text-5xl font-bold'>Hitansh Joshi</h1>
          <h2 className='text-white  font-semibold text-2xl'>Full Stack Developer</h2>
          <p className='text-gray-300 text-[15px] '>Java Full-Stack Developer with expertise in Spring Boot, Microservices, Docker, and RESTful services. Skilled in building scalable, production-ready applications and deploying containerized solutions.</p>
           
           <div className='flex gap-5'>
           <div className=' border border-solid border-gray-800 py-5 px-10 rounded-lg flex flex-col gap-1.5'>

            <div className='text-gray-400 text-[14px]'>Speciality</div>
            <div className='text-white font-semibold'>Full Stack</div>
              
           </div>
           <div className='text-gray-400 border border-solid border-gray-800 py-5 px-10 rounded-lg gap-1.5'>

            <div className='text-gray-400 text-[14px]'>Focus</div>
            <div className='text-white font-semibold'>Backend Systems</div>
              
           </div>
           </div>

        </div>
       </div>

       <div className='mt-20 flex flex-col gap-3.5'>
        <h1 className='font-bold text-white text-3xl'>About me</h1>
        <p className='text-gray-300 text-[15px]'>I am a Java Full Stack Developer from Dehradun, Uttarakhand, with a strong interest in building efficient, high-performance web applications. I specialize in creating end-to-end solutions and enjoy working with modern technologies.</p>
      <p className='text-gray-300 text-[15px]'>Along with development, I love solving DSA problems and enjoy tackling challenging algorithms that sharpen my problem-solving skills.</p>
       </div>
    </section>
  )
}

export default About
