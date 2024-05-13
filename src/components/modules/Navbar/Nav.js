'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import Link from 'next/link'
function Nav() {
    const [show, setShow] = useState(false)
  return (
    <div className="w-full flex justify-center items-center  ">
        <div className="PC-NAV max-md:hidden w-full container h-[80px] flex justify-between items-center ">
            <div className="logo flex "><Image src={"/images/Logo.png"} width={70} height={70}/></div>
                <ul className='flex gap-9 font-sans font-bold text-white'>
                    <li><Link href={'/'}> Home </Link></li>
                    <li>Portfolio</li>
                    <li><Link rel="stylesheet" href="#skills">Skills </Link></li>
                    <li><Link href={'#about'}>About Me</Link></li>
                </ul>
            <div className="contact-me font-mono flex ">Contact me</div>
        </div>

      <div className="PHONE-NAV md:hidden  w-full container bg-[#0B0B0B] h-[80px] flex justify-between items-center px-5 max-md:w-full max-md:px-4">
            <div className="logo"><Image src={"/images/Logo.png"} width={70} height={70}/></div>
            <div className="Ham">Ham</div>
      </div>

    </div>
  )
}

export default Nav
