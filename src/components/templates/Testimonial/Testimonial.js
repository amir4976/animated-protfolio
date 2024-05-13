"use client"
import React, { useEffect } from 'react'
import { IoShieldCheckmark } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <div  data-aos="fade-up"  data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" className='Testimonial w-full bg-[#0B0B0B] flex flex-col justify-center items-center h-fit my-5 max-md:h-screen max-md:text-center  p-5 py-[100px]'>
      <div className="title text-4xl mb-5 font-sans  capitalize max-md:text-2xl">what my customers say?</div>
      <div className="desc max-w-[880px] text-4xl font-sans font-bold italic capitalize text-left ">
      "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
      </div>
      <div className="my-10 text-5xl"><IoShieldCheckmark /></div>
    </div>
  )
}

export default Testimonial
