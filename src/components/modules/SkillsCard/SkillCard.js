"use client"
import React, { useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SkillCard({duration,disc,icon}) { 
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='w-1/2 h-60 p-5 max-xl:w-full max-xl:py-5 max-xl:px-0  text-[#C8FEC7]' data-aos="fade-up"  data-aos-offset="200" data-aos-delay="50" data-aos-duration={duration}>
      <div className="SkillCard border h-full rounded-md flex flex-col p-5">
      <span className='text-6xl text-white '>
      {icon}
      </span>
      <span className=' font-sans text-left text-2xl mt-4 uppercase '>
            {disc}
      </span>
      </div>
    </div>
  )
}

export default SkillCard
