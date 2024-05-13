"use client"
import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Rates() {
    
    
  return (

        <div data-aos="fade-up"  data-aos-duration="1000"  className="container bg-[#0B0B0B] w-full h-fit flex justify-between items-center rounded-xl border-[#646464] border text-[#C8FEC7]  px-10 py-10 max-lg:flex-col max-lg:w-full max-lg:px-0 max-lg:gap-5 mt-10" >
            <div className="">
                <div className="Rate-title">92%</div>
                <div className="Rate-disc">job success <br/> score on upwork</div>
            </div>
            <Image src={"/images/Dawn.svg"} width={70} height={70}/>
            <div className="">
                <div className="Rate-title">25.000</div>
                <div className="Rate-disc">job success <br/> score on upwork</div>
            </div>
            <Image src={"/images/Dawn.svg"} width={70} height={70}/>
            <div className="">
                <div className="Rate-title">2k</div>
                <div className="Rate-disc">job success <br/> score on upwork</div>
            </div>
        </div>
  
  )
}

export default Rates
